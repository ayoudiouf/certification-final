import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitebarComponent } from './sitebar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('SitebarComponent', () => {
  let component: SitebarComponent;
  let fixture: ComponentFixture<SitebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SitebarComponent, HttpClientModule]
    });
    fixture = TestBed.createComponent(SitebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
