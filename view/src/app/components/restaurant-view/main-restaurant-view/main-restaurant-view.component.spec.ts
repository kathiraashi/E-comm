import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRestaurantViewComponent } from './main-restaurant-view.component';

describe('MainRestaurantViewComponent', () => {
  let component: MainRestaurantViewComponent;
  let fixture: ComponentFixture<MainRestaurantViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRestaurantViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRestaurantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
