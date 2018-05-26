import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Default
import { MainRestaurantViewComponent } from './components/restaurant-view/main-restaurant-view/main-restaurant-view.component';
import { LandingPageComponent } from './components/LandingPage/landing-page/landing-page.component';
import { MainUserViewComponent } from './components/UserView/main-user-view/main-user-view.component';
import { CartPageComponent } from './components/OrderProcess/cart-page/cart-page.component';
import { MainRestaurantListComponent } from './components/restaurant-list/main-restaurant-list/main-restaurant-list.component';

const appRoutes: Routes = [
    { path: '',
        component: LandingPageComponent,
        data: { animation: { value: 'Restaurant_View', } }
    },
    { path: 'Landing_Page',
        component: LandingPageComponent,
        data: { animation: { value: 'Landing_Page', } }
    },
    { path: 'Restaurant_View',
        component: MainRestaurantViewComponent,
        data: { animation: { value: 'Restaurant_View', } }
    },
    { path: 'Restaurant_List',
        component: MainRestaurantListComponent,
        data: { animation: { value: 'Restaurant_List', } }
    },
    { path: 'User_View',
        component: MainUserViewComponent,
        data: { animation: { value: 'User_View', } }
    },
    { path: 'Cart',
        component: CartPageComponent,
        data: { animation: { value: 'Cart', } }
    },
];


@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(appRoutes,
        { enableTracing: true }
      )],
    providers: [],
    bootstrap: []
  })
  export class AppRoutingModule { }
