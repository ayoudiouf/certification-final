import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashChefpavionComponent } from './dash-chefpavion.component';
import { HttpClientModule } from '@angular/common/http';

describe('DashChefpavionComponent', () => {
  let component: DashChefpavionComponent;
  let fixture: ComponentFixture<DashChefpavionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashChefpavionComponent, HttpClientModule]
    });
    fixture = TestBed.createComponent(DashChefpavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
