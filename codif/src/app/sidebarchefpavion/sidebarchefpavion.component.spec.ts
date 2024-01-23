import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarchefpavionComponent } from './sidebarchefpavion.component';

describe('SidebarchefpavionComponent', () => {
  let component: SidebarchefpavionComponent;
  let fixture: ComponentFixture<SidebarchefpavionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarchefpavionComponent]
    });
    fixture = TestBed.createComponent(SidebarchefpavionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
