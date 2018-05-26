import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-user-view',
  templateUrl: './main-user-view.component.html',
  styleUrls: ['./main-user-view.component.css']
})
export class MainUserViewComponent implements OnInit {

  Active_Tab = 'My_Orders';
  Favorite_Active_Tab = 'Restaurants';

  constructor() { }

  ngOnInit() {
  }

  Change_Active_Tab(Tab_Value) {
    if (this.Active_Tab !== Tab_Value) {
      this.Active_Tab = Tab_Value;
    }
  }

  Change_Favorite_Active_Tab(Tab_Value) {
    if (this.Favorite_Active_Tab !== Tab_Value) {
      this.Favorite_Active_Tab = Tab_Value;
    }
  }

}
