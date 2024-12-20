import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements OnInit {
  private map: any;

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Inicializa el mapa y establece la vista inicial
    this.map = L.map('map').setView([-12.04318, -77.02824], 13);

    // Agrega la capa de tiles de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© aaMaps '
    }).addTo(this.map);

    // Agrega un marcador al mapa
    L.marker([-12.030408, -77.057201]).addTo(this.map)
      .bindPopup('Marcador 1')
      .openPopup()
  }
}
