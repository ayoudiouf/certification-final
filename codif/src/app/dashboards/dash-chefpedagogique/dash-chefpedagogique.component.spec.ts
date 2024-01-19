import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChefpedagogiqueComponent } from './dash-chefpedagogique.component';

describe('DashChefpedagogiqueComponent', () => {
  let component: DashChefpedagogiqueComponent;
  let fixture: ComponentFixture<DashChefpedagogiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashChefpedagogiqueComponent]
    });
    fixture = TestBed.createComponent(DashChefpedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
