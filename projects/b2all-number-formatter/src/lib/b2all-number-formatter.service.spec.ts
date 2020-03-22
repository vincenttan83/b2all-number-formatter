import { TestBed } from '@angular/core/testing';

import { B2allNumberFormatterService } from './b2all-number-formatter.service';

describe('B2allNumberFormatterService', () => {
  let service: B2allNumberFormatterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(B2allNumberFormatterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
