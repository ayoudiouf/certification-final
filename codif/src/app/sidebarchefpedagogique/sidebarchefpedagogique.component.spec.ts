import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarchefpedagogiqueComponent } from './sidebarchefpedagogique.component';

describe('SidebarchefpedagogiqueComponent', () => {
  let component: SidebarchefpedagogiqueComponent;
  let fixture: ComponentFixture<SidebarchefpedagogiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarchefpedagogiqueComponent]
    });
    fixture = TestBed.createComponent(SidebarchefpedagogiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
