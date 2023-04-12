import { TestBed } from '@angular/core/testing';

import { DeloycheckoutGuard } from './deloycheckout.guard';

describe('DeloycheckoutGuard', () => {
  let guard: DeloycheckoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeloycheckoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
