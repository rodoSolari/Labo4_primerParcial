import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';
import { AuthService } from '../servicios/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  return auth.getUser().pipe(
    map(user => {
      if (user) {
        return true;
      } else {
        return false;
      }
    })
  );
};
