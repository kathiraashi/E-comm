import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-main-user-view',
  templateUrl: './main-user-view.component.html',
  styleUrls: ['./main-user-view.component.css']
})
export class MainUserViewComponent implements OnInit {

  lat: Number = 36.7491268;
  lng: Number = -119.8179682;

  modalRef: BsModalRef;

  Active_Tab = 'My_Orders';
  Favorite_Active_Tab = 'Restaurants';

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: ' maxWidth50' }));
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
