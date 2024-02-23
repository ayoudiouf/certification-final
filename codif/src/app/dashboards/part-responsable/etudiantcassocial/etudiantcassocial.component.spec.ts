import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantcassocialComponent } from './etudiantcassocial.component';

describe('EtudiantcassocialComponent', () => {
  let component: EtudiantcassocialComponent;
  let fixture: ComponentFixture<EtudiantcassocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantcassocialComponent]
    });
    fixture = TestBed.createComponent(EtudiantcassocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
