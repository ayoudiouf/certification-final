import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebaretudiantComponent } from './sidebaretudiant.component';
import { HttpClient } from '@angular/common/http';

describe('SidebaretudiantComponent', () => {
  let component: SidebaretudiantComponent;
  let fixture: ComponentFixture<SidebaretudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebaretudiantComponent, HttpClient]
    });
    fixture = TestBed.createComponent(SidebaretudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
