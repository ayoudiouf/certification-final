import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueDeConfidentialiteComponent } from './politique-de-confidentialite.component';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PolitiqueDeConfidentialiteComponent', () => {
  let component: PolitiqueDeConfidentialiteComponent;
  let fixture: ComponentFixture<PolitiqueDeConfidentialiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueDeConfidentialiteComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(PolitiqueDeConfidentialiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
