import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglCardComponent } from './singl-card.component';

describe('SinglCardComponent', () => {
  let component: SinglCardComponent;
  let fixture: ComponentFixture<SinglCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
