import { TestBed } from '@angular/core/testing';

import { CurrencyInputService } from './currency-input.service';

describe('CurrencyInputService', () => {
  let service: CurrencyInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
