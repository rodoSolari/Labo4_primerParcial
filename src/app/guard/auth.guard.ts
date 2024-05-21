import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(UsuarioService);

  if(auth.userLogged()) {
    console.log("puede pasar");
    return true
  }

  console.log("no puede pasar");
  return  false;
};
