// Default Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { ModalModule, } from 'ngx-bootstrap';

import {MatStepperModule, MatCheckboxModule, MatRadioModule, MatExpansionModule} from '@angular/material';
import {SliderModule} from 'primeng/slider';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { MainRestaurantViewComponent } from './components/restaurant-view/main-restaurant-view/main-restaurant-view.component';
import { MainHeaderComponent } from './components/commonPages/main-header/main-header.component';
import { LandingPageComponent } from './components/LandingPage/landing-page/landing-page.component';
import { MainUserViewComponent } from './components/UserView/main-user-view/main-user-view.component';
import { CartPageComponent } from './components/OrderProcess/cart-page/cart-page.component';
import { MainRestaurantListComponent } from './components/restaurant-list/main-restaurant-list/main-restaurant-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainRestaurantViewComponent,
    MainHeaderComponent,
    LandingPageComponent,
    MainUserViewComponent,
    CartPageComponent,
    MainRestaurantListComponent
   ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyAKAH7vSuRjbTP16E9AFaUf6gDa69DZ4e8'}),
    AgmSnazzyInfoWindowModule,
    ModalModule.forRoot(),
    MatStepperModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AIzaSyAKAH7vSuRjbTP16E9AFaUf6gDa69DZ4e8
