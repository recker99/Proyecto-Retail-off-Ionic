import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements AfterViewInit {
  map: L.Map | undefined;

  constructor() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {  
    if (!this.map) {  
      this.map = L.map('map').setView([51.505, -0.09], 13);  

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  
        maxZoom: 19,  
        attribution: '© OpenStreetMap'  
      }).addTo(this.map);  

      // Asegúrate de llamar a invalidateSize después de un segundo  
      setTimeout(() => {  
        if (this.map) {  
          this.map.invalidateSize();  
        }  
      }, 100); // Espera un pequeño retraso, 100 ms puede ser suficiente  
    }  
  }  
}
