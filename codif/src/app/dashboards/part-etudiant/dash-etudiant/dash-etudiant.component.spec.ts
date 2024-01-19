import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashEtudiantComponent } from './dash-etudiant.component';

describe('DashEtudiantComponent', () => {
  let component: DashEtudiantComponent;
  let fixture: ComponentFixture<DashEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashEtudiantComponent]
    });
    fixture = TestBed.createComponent(DashEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
