import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  Active_Tab = 'Cart';
  constructor() { }

  ngOnInit() {
  }
  Change_Active_Tab(text_value) {
    if (this.Active_Tab !== text_value) {
      this.Active_Tab = text_value;
    }
  }

}
