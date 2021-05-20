import { TestBed } from '@angular/core/testing';

import { ExternalDataService } from './external-data.service';

describe('ExternalDataService', () => {
  let service: ExternalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
