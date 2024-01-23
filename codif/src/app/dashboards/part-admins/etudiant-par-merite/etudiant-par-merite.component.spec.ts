import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantParMeriteComponent } from './etudiant-par-merite.component';

describe('EtudiantParMeriteComponent', () => {
  let component: EtudiantParMeriteComponent;
  let fixture: ComponentFixture<EtudiantParMeriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantParMeriteComponent]
    });
    fixture = TestBed.createComponent(EtudiantParMeriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
