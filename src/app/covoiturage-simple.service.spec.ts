import { TestBed } from '@angular/core/testing';

import { CovoiturageSimpleService } from './covoiturage-simple.service';

describe('CovoiturageSimpleService', () => {
  let service: CovoiturageSimpleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovoiturageSimpleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
