import { TestBed } from '@angular/core/testing';

import { GetTicketService } from './get-ticket.service';

describe('GetTicketService', () => {
  let service: GetTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
