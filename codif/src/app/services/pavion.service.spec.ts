import { TestBed } from '@angular/core/testing';
import { PavillonService } from './pavion.service';


describe('PavionService', () => {
  let service: PavillonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PavillonService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
