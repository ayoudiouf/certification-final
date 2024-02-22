import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarchefpedagogiqueComponent } from './sidebarchefpedagogique.component';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';

describe('SidebarchefpedagogiqueComponent', () => {
  let component: SidebarchefpedagogiqueComponent;
  let fixture: ComponentFixture<SidebarchefpedagogiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarchefpedagogiqueComponent, HttpClientModule, UserService]
    });
    fixture = TestBed.createComponent(SidebarchefpedagogiqueComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
