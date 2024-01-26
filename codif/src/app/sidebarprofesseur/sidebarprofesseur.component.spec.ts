import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarprofesseurComponent } from './sidebarprofesseur.component';

describe('SidebarprofesseurComponent', () => {
  let component: SidebarprofesseurComponent;
  let fixture: ComponentFixture<SidebarprofesseurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarprofesseurComponent]
    });
    fixture = TestBed.createComponent(SidebarprofesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
