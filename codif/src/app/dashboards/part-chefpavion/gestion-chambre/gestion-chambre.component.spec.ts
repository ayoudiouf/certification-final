import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionChambreComponent } from './gestion-chambre.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarchefpavionComponent } from 'src/app/sidebarchefpavion/sidebarchefpavion.component';
import { HeaderSidebarComponent } from 'src/app/header-sidebar/header-sidebar.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('GestionChambreComponent', () => {
  let component: GestionChambreComponent;
  let fixture: ComponentFixture<GestionChambreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionChambreComponent, SidebarchefpavionComponent, HeaderSidebarComponent],
      imports: [HttpClientModule, ReactiveFormsModule, FormsModule]
    });
    fixture = TestBed.createComponent(GestionChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
