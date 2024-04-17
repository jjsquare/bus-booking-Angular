import { TestBed } from '@angular/core/testing';

import { GetBusService } from './get-bus.service';

describe('GetBusService', () => {
  let service: GetBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
