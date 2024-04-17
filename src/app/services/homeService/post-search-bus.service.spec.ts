import { TestBed } from '@angular/core/testing';

import { PostSearchBusService } from './post-search-bus.service';

describe('PostSearchBusService', () => {
  let service: PostSearchBusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostSearchBusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
