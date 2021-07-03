import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListingScreenComponent } from './main-listing-screen.component';

describe('MainListingScreenComponent', () => {
  let component: MainListingScreenComponent;
  let fixture: ComponentFixture<MainListingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainListingScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainListingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
