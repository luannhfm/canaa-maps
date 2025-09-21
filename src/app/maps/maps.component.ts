import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { PoMenuItem, PoModule } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';
declare const google: any;
@Component({
  selector: 'app-maps',
  standalone: true,
imports: [CommonModule, PoModule], // <-- precisa p/ *ngIf  
templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent implements OnInit {


    lat!: number;
  lng!: number;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(p => {
      this.lat = Number(p.get('lat'));
      this.lng = Number(p.get('lng'));
      // aqui você chama seu mapa (Google/Leaflet) usando lat/lng
    });
  }

    readonly menus: Array<PoMenuItem> = [
    { label: 'Sair', shortLabel:'teste' ,  icon: 'po-icon-exit' , link:'/' },
  ];
  
  // Se a imagem do Street View falhar (403/401/sem autorização), fazemos fallback automático
  onStreetError(){ this.streetViewUrl = null; }


  @ViewChild('mapEl', { static: true }) mapEl!: ElementRef<HTMLDivElement>;

  // Coordenadas iniciais
  // private lat = -7.11532; // João Pessoa/PB
  // private lng = -34.8610;

  address: string | null = null;
  streetViewUrl: string | null = null;
  staticMapUrl: string | null = null;

  private map?: any;
  private marker?: any; // AdvancedMarkerElement
  private mapsLoaded = false;

  async ngOnInit(): Promise<void> {
    
    await this.loadMapsJsApi();
    const center = { lat: this.lat, lng: this.lng };

    this.initMap(center);
    this.placeAdvancedMarker(center);
    this.updateImages(center);
    this.reverseGeocode(center);
  }

  // Carrega Maps JS com a biblioteca 'marker' (necessária p/ AdvancedMarker)
  private async loadMapsJsApi(): Promise<void> {
    if (this.mapsLoaded) return;

    await new Promise<void>((resolve, reject) => {
      const id = 'google-maps-js';
      if (document.getElementById(id)) { this.mapsLoaded = true; return resolve(); }

      const s = document.createElement('script');
      s.id = id;
      s.async = true;
      s.defer = true;
      s.src = `https://maps.googleapis.com/maps/api/js?key=${environment.mapsApiKey}&libraries=marker`;
      s.onload = () => { this.mapsLoaded = true; resolve(); };
      s.onerror = () => reject('Falha ao carregar Google Maps JS API');
      document.head.appendChild(s);
    });
  }

  private initMap(center: { lat: number; lng: number }) {
    const options: any = {
      center,
      zoom: 16,
      mapId: environment.mapId, // ← obrigatório p/ Advanced Marker sem warning
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true
    };

    if (!this.map) {
      this.map = new google.maps.Map(this.mapEl.nativeElement, options);
    } else {
      this.map.setOptions(options);
    }
  }

  // Advanced Marker com PinElement (pino bonito e performático)
  private placeAdvancedMarker(center: { lat: number; lng: number }) {
    const { AdvancedMarkerElement, PinElement } = (google.maps as any).marker;

    const pin = new PinElement({
      background: '#2563eb', // azul
      borderColor: '#ffffff',
      glyphColor: '#ffffff', // cor do ícone interno
      scale: 1.0
    });

    if (this.marker) this.marker.map = null;

    this.marker = new AdvancedMarkerElement({
      map: this.map,
      position: center,
      content: pin.element,
      title: 'Local selecionado'
    });
  }

  private updateImages(center: { lat: number; lng: number }) {
    const size = '640x360';

    // Static Map com pino como fallback
    const marker = `color:blue|label:•|${center.lat},${center.lng}`;
    this.staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=16&size=${size}&maptype=roadmap&markers=${encodeURIComponent(marker)}&key=${environment.mapsApiKey}`;

    // Street View quando houver cobertura
    try {
      const sv = new google.maps.StreetViewService();
      sv.getPanorama({ location: center, radius: 150 }, (data: any, status: any) => {
        if (status === 'OK') {
          this.streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${center.lat},${center.lng}&key=${environment.mapsApiKey}`;
        } else {
          this.streetViewUrl = null;
        }
      });
    } catch {
      this.streetViewUrl = null;
    }
  }


  gmapsLink(): string {
    return `https://www.google.com/maps?q=${this.lat},${this.lng}`;
  }

  async copy(text: string) {
    try { await navigator.clipboard.writeText(text); alert('Endereço copiado!'); }
    catch { alert('Não foi possível copiar.'); }
  }


  private reverseGeocode(center: { lat: number; lng: number }) {
  try {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: center }, (results: any, status: any) => {
      if (status === 'OK' && results && results.length) {
        this.address = this.formatAddressWithoutNeighborhood(results[0]);
      } else {
        this.address = 'Endereço não encontrado';
      }
    });
  } catch {
    this.address = 'Geocoding indisponível';
  }
}

/** Monta o endereço SEM bairro (neighborhood/sublocality). */
private formatAddressWithoutNeighborhood(result: any): string {
  const comps = result?.address_components || [];

  const has = (c: any, t: string) => c?.types?.includes(t);
  const get = (t: string) => comps.find((c: any) => has(c, t))?.long_name;
  const getShort = (t: string) => comps.find((c: any) => has(c, t))?.short_name;

  // NÃO incluímos neighborhood/sublocality(_level_1)
  const route = get('route');                       // Rua/avenida
  const number = get('street_number');              // Número
  const city = get('locality') || get('administrative_area_level_2'); // Cidade
  const state = getShort('administrative_area_level_1');              // UF
  const postal = get('postal_code');                // CEP
  const country = get('country');                   // País

  const parts: string[] = [];
  const line1 = [route, number].filter(Boolean).join(', ');           // "Av. X, 123"
  if (line1) parts.push(line1);

  const cityState = [city, state].filter(Boolean).join(' - ');        // "Cidade - UF"
  if (cityState) parts.push(cityState);

  if (postal) parts.push(postal);
  if (country) parts.push(country);

  if (parts.length) return parts.join(', ');

  // Fallback: remove o trecho " - Bairrox, " do formatted_address
  const f = result?.formatted_address as string;
  return f ? f.replace(/\s-\s[^,]+,/, ',') : 'Endereço não encontrado';
}




}

