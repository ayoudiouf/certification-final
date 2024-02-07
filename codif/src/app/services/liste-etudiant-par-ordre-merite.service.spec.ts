import { TestBed } from '@angular/core/testing';

import { ListeEtudiantParOrdreMeriteService } from './liste-etudiant-par-ordre-merite.service';

describe('ListeEtudiantParOrdreMeriteService', () => {
  let service: ListeEtudiantParOrdreMeriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeEtudiantParOrdreMeriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
