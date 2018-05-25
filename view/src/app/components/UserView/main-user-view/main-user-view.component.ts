import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-user-view',
  templateUrl: './main-user-view.component.html',
  styleUrls: ['./main-user-view.component.css']
})
export class MainUserViewComponent implements OnInit {

  Active_Tab = 'My_Orders';

  constructor() { }

  ngOnInit() {
  }

  Change_Active_Tab(Tab_Value) {
    if (this.Active_Tab !== Tab_Value) {
      this.Active_Tab = Tab_Value;
    }
  }

}
