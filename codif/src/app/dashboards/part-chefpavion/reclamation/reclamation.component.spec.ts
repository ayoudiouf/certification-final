import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationComponent } from './reclamation.component';
import { HttpClientModule } from '@angular/common/http';
import { ReclamationService } from 'src/app/services/reclamation.service';

describe('ReclamationComponent', () => {
  let component: ReclamationComponent;
  let fixture: ComponentFixture<ReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationComponent, HttpClientModule, ReclamationService]
    });
    fixture = TestBed.createComponent(ReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
