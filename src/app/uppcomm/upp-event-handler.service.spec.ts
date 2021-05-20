import { TestBed } from '@angular/core/testing';

import { UppEventHandlerService } from './upp-event-handler.service';

describe('UppEventHandlerService', () => {
  let service: UppEventHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UppEventHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
