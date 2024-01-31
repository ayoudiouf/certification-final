import { TestBed } from '@angular/core/testing';

import { PavionService } from './pavillon.service';

describe('PavionService', () => {
  let service: PavionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PavionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
