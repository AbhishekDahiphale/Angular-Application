import { TestBed } from '@angular/core/testing';

import { ArithimaticService } from './arithimatic.service';

describe('ArithimaticService', () => {
  let service: ArithimaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArithimaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
