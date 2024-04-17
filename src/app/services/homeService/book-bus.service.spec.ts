import { TestBed } from '@angular/core/testing';

import { BookBusService } from './book-bus.service';

describe('BookBusService', () => {
  let service: BookBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
