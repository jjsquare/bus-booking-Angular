import { TestBed } from '@angular/core/testing';

import { ConfirmationserviceService } from './confirmationservice.service';

describe('ConfirmationserviceService', () => {
  let service: ConfirmationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
