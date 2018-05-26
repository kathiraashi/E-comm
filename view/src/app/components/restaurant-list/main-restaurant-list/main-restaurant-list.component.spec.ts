import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRestaurantListComponent } from './main-restaurant-list.component';

describe('MainRestaurantListComponent', () => {
  let component: MainRestaurantListComponent;
  let fixture: ComponentFixture<MainRestaurantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRestaurantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
