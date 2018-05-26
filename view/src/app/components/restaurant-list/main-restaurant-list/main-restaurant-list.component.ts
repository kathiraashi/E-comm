import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-restaurant-list',
  templateUrl: './main-restaurant-list.component.html',
  styleUrls: ['./main-restaurant-list.component.css']
})
export class MainRestaurantListComponent implements OnInit {

  rangeValues: number[] = [15, 70];

  constructor() { }

  ngOnInit() {
  }

}
