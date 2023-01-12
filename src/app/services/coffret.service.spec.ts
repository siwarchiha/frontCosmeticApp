import { TestBed } from '@angular/core/testing';

import { CoffretService } from './coffret.service';

describe('CoffretService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoffretService = TestBed.get(CoffretService);
    expect(service).toBeTruthy();
  });
});
