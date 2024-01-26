import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProfesseurComponent } from './dash-professeur.component';

describe('DashProfesseurComponent', () => {
  let component: DashProfesseurComponent;
  let fixture: ComponentFixture<DashProfesseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashProfesseurComponent]
    });
    fixture = TestBed.createComponent(DashProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
