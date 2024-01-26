import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantpayeComponent } from './etudiantpaye.component';

describe('EtudiantpayeComponent', () => {
  let component: EtudiantpayeComponent;
  let fixture: ComponentFixture<EtudiantpayeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantpayeComponent]
    });
    fixture = TestBed.createComponent(EtudiantpayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
