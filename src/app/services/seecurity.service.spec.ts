import { TestBed } from '@angular/core/testing';

import { SeecurityService } from './seecurity.service';

describe('SeecurityService', () => {
  let service: SeecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
