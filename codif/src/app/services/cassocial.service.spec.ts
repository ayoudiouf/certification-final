import { TestBed } from '@angular/core/testing';

import { CassocialService } from './cassocial.service';

describe('CassocialService', () => {
  let service: CassocialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CassocialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
