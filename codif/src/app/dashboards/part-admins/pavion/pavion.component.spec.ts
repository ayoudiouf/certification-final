import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PavionComponent } from './pavillon.component';

describe('PavionComponent', () => {
  let component: PavionComponent;
  let fixture: ComponentFixture<PavionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PavionComponent]
    });
    fixture = TestBed.createComponent(PavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
