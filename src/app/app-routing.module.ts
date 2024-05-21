import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { authGuard } from './guard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/bienvenido', pathMatch: 'full' }, // Redirección a /bienvenido por defecto
  { path: 'bienvenido', component: BienvenidoComponent, canActivate: [authGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'repartidor', loadChildren: () => import('./componentes/repartidor/repartidor.module').then(m => m.RepartidorModule) },
  //{ path: 'peliculas', loadChildren: () => import('./componentes/peliculas/peliculas.module').then(m => m.PeliculasModule) },
  { path: '**', redirectTo: '/bienvenido' } // Redirección en caso de ruta no encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
