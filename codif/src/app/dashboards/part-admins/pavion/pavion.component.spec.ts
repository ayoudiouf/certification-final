import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavionComponent } from './pavion.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PavionComponent', () => {
  let component: PavionComponent;
  let fixture: ComponentFixture<PavionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PavionComponent, HttpClientModule]
    });
    fixture = TestBed.createComponent(PavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize variables correctly', () => {
    expect(component.islibelleValid).toBeFalsy();
    expect(component.isnombres_chambresValid).toBeFalsy();
    expect(component.isnombres_etagesValid).toBeFalsy();
    expect(component.verifMessagelibelle).toEqual('');
    // Add assertions for other variables as needed
  });

  it('should validate libelle field', () => {
    component.libelle = '';
    component.verifMessagelibelleFunction();
    expect(component.islibelleValid).toBeFalsy();
    expect(component.verifMessagelibelle).toEqual('Le nom du libelle est obligatoire');

    component.libelle = 'Test';
    component.verifMessagelibelleFunction();
    expect(component.islibelleValid).toBeTruthy();
    expect(component.verifMessagelibelle).toEqual('');
  });

});
