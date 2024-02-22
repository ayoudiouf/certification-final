import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandereclamationComponent } from './demandereclamation.component';
import { HttpClient } from '@angular/common/http';

describe('DemandereclamationComponent', () => {
  let component: DemandereclamationComponent;
  let fixture: ComponentFixture<DemandereclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemandereclamationComponent, HttpClient]
    });
    fixture = TestBed.createComponent(DemandereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
