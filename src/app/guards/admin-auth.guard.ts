import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { map } from 'rxjs';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.getUserRole().pipe(
    map(tipoUsuario => {
      console.log(tipoUsuario)
      if (tipoUsuario === 'admin') {
        return true;
      } else {
        return false;
      }
    })
  );
};


