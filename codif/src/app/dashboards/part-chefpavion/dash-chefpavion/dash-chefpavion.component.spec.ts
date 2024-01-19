import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChefpavionComponent } from './dash-chefpavion.component';

describe('DashChefpavionComponent', () => {
  let component: DashChefpavionComponent;
  let fixture: ComponentFixture<DashChefpavionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashChefpavionComponent]
    });
    fixture = TestBed.createComponent(DashChefpavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
