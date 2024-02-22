import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasSocialComponent } from './cas-social.component';
import { HttpClient } from '@angular/common/http';
import { ChambresService } from 'src/app/services/chambres.service';
import { UserService } from 'src/app/services/user.service';

describe('CasSocialComponent', () => {
  let component: CasSocialComponent;
  let fixture: ComponentFixture<CasSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasSocialComponent, HttpClient, ChambresService, UserService]
    });
    fixture = TestBed.createComponent(CasSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should create the component', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should have empty INE, nom, prenom, email, telephone, etc. after initialization', () => {
    expect(component.INE).toEqual('');
    expect(component.nom).toEqual('');
    expect(component.prenom).toEqual('');
    // Add similar expectations for other properties
  });
});
