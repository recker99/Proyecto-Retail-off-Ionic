import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage  {
  scanHistory: string[] = [];

  constructor() {
    this.loadHistory();
   }

   loadHistory() {
    const history = localStorage.getItem('scanHistory');
    if (history) {
      this.scanHistory = JSON.parse(history);
    }
  }

  isGeolocation(content: string): boolean {
    // Verificar si el contenido es una coordenada geográfica (geolocalización)
    const geoRegex = /^(geo:)?-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
    return geoRegex.test(content);
  }

  showOnMap(geolocation: string) {
    if (geolocation) {
      // Redirigir a la página del mapa con la geolocalización
      window.open(`https://www.google.com/maps/search/?api=1&query=${geolocation}`, '_system');
    }
  }

}
