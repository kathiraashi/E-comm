import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AgmMap } from '@agm/core';
import { AgmSnazzyInfoWindow } from '@agm/snazzy-info-window';

@Component({
   selector: 'app-landing-page',
   templateUrl: './landing-page.component.html',
   styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

   lat: number;
   lng: number;
   status_true: Boolean = false;

   OpenInfoWindow: Boolean = true;

   FilterRightSection: Boolean = false;

   circleLat: number;
   circleLng: number;

   styles: any[] = [
      // { 'featureType': 'administrative',           'elementType': 'labels.text.fill',   'stylers': [{ 'color': '#606269' }] },
      // { 'featureType': 'administrative.country',   'elementType': 'geometry.stroke',    'stylers': [{'color': '#c1c3bf'}] },
      // { 'featureType': 'landscape',                'elementType': 'all',                'stylers': [{ 'color': '#f1f1f1'}] },
      // { 'featureType': 'poi',                      'elementType': 'all',                'stylers': [{'visibility': 'off'}, {'lightness': '0'}] },
      // { 'featureType': 'road',                     'elementType': 'all',                'stylers': [{'saturation': -100}, {'lightness': '6' }] },
      // { 'featureType': 'road.highway',             'elementType': 'all',                'stylers': [{ 'visibility': 'simplified'}] },
      // { 'featureType': 'road.highway',             'elementType': 'geometry.fill',      'stylers': [{'color': '#ffffff'}] },
      // { 'featureType': 'road.arterial',            'elementType': 'labels.icon',        'stylers': [{'visibility': 'off'}] },
      // { 'featureType': 'transit',                  'elementType': 'all',                'stylers': [{'visibility': 'off'}] },
      // { 'featureType': 'water',                    'elementType': 'all',                'stylers': [{'color': '#d6d6d6'}, {'visibility': 'on'}]
      // }
   ];

   constructor(public router: Router) { }

   ngOnInit() {
      if (window.navigator.geolocation) {
         window.navigator.geolocation.getCurrentPosition(position => {
            this.status_true = true;
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.circleLat = position.coords.latitude;
            this.circleLng = position.coords.longitude;
         });
         if (!this.status_true) {
            this.lat = 36.73252872710401;
            this.lng = -119.79924472212213;
            this.circleLat = 36.73252872710401;
            this.circleLng = -119.79924472212213;
         }
      }
   }

   updateCircle(event) {
      this.circleLat = event.coords.lat;
      this.circleLng = event.coords.lng;
   }

   GotoRestaurant() {
      this.router.navigate(['/Restaurant_View']);
   }
}
