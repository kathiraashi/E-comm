import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-restaurant-view',
  templateUrl: './main-restaurant-view.component.html',
  styleUrls: ['./main-restaurant-view.component.css']
})
export class MainRestaurantViewComponent implements OnInit {

  lat: Number = 10.978418;
  lng: Number = 77.109007;
  Active_Tab = 'Menu';

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
  }

  Change_Active_Tab(Tab_Name) {
    if (this.Active_Tab !== Tab_Name) {
      this.Active_Tab = Tab_Name;
    }
  }

}
