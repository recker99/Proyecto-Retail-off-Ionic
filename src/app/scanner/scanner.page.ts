import { Component } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage {

  constructor(private platform: Platform, private router: Router) { }

  async startScan() {
    if (this.platform.is('mobile') && !this.platform.is('mobileweb')) {
      const allowed = await this.checkPermission();
  
      if (allowed) {
        BarcodeScanner.hideBackground(); 
  
        const result = await BarcodeScanner.startScan(); 
  
        if (result.hasContent) {
          this.handleScanResult(result.content); // Manejar el resultado del escaneo
        }
      }
    } else {
      alert('El escáner solo está disponible en dispositivos móviles.');
    }
  }
  

  async checkPermission() {
    const status = await BarcodeScanner.checkPermission({ force: true });
    if (status.granted) {
      return true;
    } else if (status.denied) {
      BarcodeScanner.openAppSettings();
      return false;
    }
  
    // Devolver false por defecto 
    return false;
  }
  

  handleScanResult(content: string) {
    this.saveToHistory(content);  

    if (content.startsWith('http')) {
      // Si el contenido es una URL, abrir el navegador
      window.open(content, '_system');
    } else if (this.isGeolocation(content)) {
      // Si es geolocalización, redirigir a la vista del mapa
      this.router.navigate(['/maps'], { queryParams: { geolocation: content } });
    } else {
      // Manejar otro tipo de contenido si es necesario
      alert('Contenido escaneado: ' + content);
    }
  }

  isGeolocation(content: string): boolean {
    // Verificar si el contenido es una coordenada geográfica (geolocalización)
    const geoRegex = /^(geo:)?-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
    return geoRegex.test(content);
  }

  saveToHistory(content: string) {
    const history = JSON.parse(localStorage.getItem('scanHistory') || '[]');
    history.push(content);
    localStorage.setItem('scanHistory', JSON.stringify(history));
  }

  ionViewWillLeave() {
    BarcodeScanner.showBackground(); // Mostrar el fondo cuando salga de la vista
  }
}
