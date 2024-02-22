import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantpayeComponent } from './etudiantpaye.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('EtudiantpayeComponent', () => {
  let component: EtudiantpayeComponent;
  let fixture: ComponentFixture<EtudiantpayeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantpayeComponent, HttpClientModule]
    });
    fixture = TestBed.createComponent(EtudiantpayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
