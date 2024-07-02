import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export const datosCompletosGuard: CanDeactivateFn<unknown> = ( component: any) :
  Observable<boolean> | Promise<boolean> | boolean => {
    if (!component.termsForm.touched  || !component.termsForm.valid) {
      return false
    }
    return true;
};
