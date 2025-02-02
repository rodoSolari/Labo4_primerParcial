import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ListadoRepartidoresComponent } from './componentes/repartidor/listado-repartidores/listado-repartidores.component';
import { AltaRepartidorComponent } from './componentes/repartidor/alta-repartidor/alta-repartidor.component';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { TerminosYCondicionesComponent } from './componentes/terminos-y-condiciones/terminos-y-condiciones.component';
import { datosCompletosGuard } from './guards/datos-completos.guard';


const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' }, // Redirección a /bienvenido por defecto
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'repartidores', loadChildren: () => import('./componentes/repartidor/repartidor.module').then(m => m.RepartidorModule), canActivate: [authGuard] },
  { path: 'helados', loadChildren: () => import('./componentes/helados/helados.module').then(m => m.HeladosModule), canActivate: [authGuard, adminAuthGuard] },
  { path: 'terminos-y-condiciones', component: TerminosYCondicionesComponent, canDeactivate:[datosCompletosGuard] },
  { path: 'registro', component: RegistroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
