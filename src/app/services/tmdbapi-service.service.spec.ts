import { TestBed } from '@angular/core/testing';

import { TMDBApiServiceService } from './tmdbapi-service.service';

describe('TMDBApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TMDBApiServiceService = TestBed.get(TMDBApiServiceService);
    expect(service).toBeTruthy();
  });
});
