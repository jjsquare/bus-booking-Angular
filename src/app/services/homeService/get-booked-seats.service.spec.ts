import { TestBed } from '@angular/core/testing';

import { GetBookedSeatsService } from './get-booked-seats.service';

describe('GetBookedSeatsService', () => {
  let service: GetBookedSeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBookedSeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
