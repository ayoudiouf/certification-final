import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasSocialComponent } from './cas-social.component';

describe('CasSocialComponent', () => {
  let component: CasSocialComponent;
  let fixture: ComponentFixture<CasSocialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasSocialComponent]
    });
    fixture = TestBed.createComponent(CasSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
