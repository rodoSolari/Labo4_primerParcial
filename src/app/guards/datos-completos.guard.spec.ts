import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { datosCompletosGuard } from './datos-completos.guard';

describe('datosCompletosGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => datosCompletosGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
