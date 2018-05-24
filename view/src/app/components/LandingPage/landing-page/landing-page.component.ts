import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  lat: number;
  lng: number;

  circleLat: number;
  circleLng: number;

  styles: any[] = [
    { 'featureType': 'administrative',           'elementType': 'labels.text.fill',   'stylers': [{ 'color': '#606269' }] },
    { 'featureType': 'administrative.country',   'elementType': 'geometry.stroke',    'stylers': [{'color': '#c1c3bf'}] },
    { 'featureType': 'landscape',                'elementType': 'all',                'stylers': [{ 'color': '#f1f1f1'}] },
    { 'featureType': 'poi',                      'elementType': 'all',                'stylers': [{'visibility': 'off'}, {'lightness': '0'}] },
    { 'featureType': 'road',                     'elementType': 'all',                'stylers': [{'saturation': -100}, {'lightness': '6' }] },
    { 'featureType': 'road.highway',             'elementType': 'all',                'stylers': [{ 'visibility': 'simplified'}] },
    { 'featureType': 'road.highway',             'elementType': 'geometry.fill',      'stylers': [{'color': '#ffffff'}] },
    { 'featureType': 'road.arterial',            'elementType': 'labels.icon',        'stylers': [{'visibility': 'off'}] },
    { 'featureType': 'transit',                  'elementType': 'all',                'stylers': [{'visibility': 'off'}] },
    { 'featureType': 'water',                    'elementType': 'all',                'stylers': [{'color': '#d6d6d6'}, {'visibility': 'on'}]
    }
  ];

  constructor() { }

  ngOnInit() {
    if (!!window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.circleLat = position.coords.latitude;
          this.circleLng = position.coords.longitude;
      });
    }
  }

  updateCircle(event) {
    this.circleLat = event.coords.lat;
    this.circleLng = event.coords.lng;
  }

}
