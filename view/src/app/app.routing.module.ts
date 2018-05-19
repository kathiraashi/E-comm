import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Default
import { MainRestaurantViewComponent } from './components/restaurant-view/main-restaurant-view/main-restaurant-view.component';

const appRoutes: Routes = [
    { path: '',
        component: MainRestaurantViewComponent,
        data: { animation: { value: 'Restaurant_View', } }
    },
    { path: 'Restaurant_View',
        component: MainRestaurantViewComponent,
        data: { animation: { value: 'Restaurant_View', } }
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
