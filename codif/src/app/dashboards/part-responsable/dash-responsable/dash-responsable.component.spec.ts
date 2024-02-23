import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashResponsableComponent } from './dash-responsable.component';

describe('DashResponsableComponent', () => {
  let component: DashResponsableComponent;
  let fixture: ComponentFixture<DashResponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashResponsableComponent]
    });
    fixture = TestBed.createComponent(DashResponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
