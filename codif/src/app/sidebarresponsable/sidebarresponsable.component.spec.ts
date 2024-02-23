import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarresponsableComponent } from './sidebarresponsable.component';

describe('SidebarresponsableComponent', () => {
  let component: SidebarresponsableComponent;
  let fixture: ComponentFixture<SidebarresponsableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarresponsableComponent]
    });
    fixture = TestBed.createComponent(SidebarresponsableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
