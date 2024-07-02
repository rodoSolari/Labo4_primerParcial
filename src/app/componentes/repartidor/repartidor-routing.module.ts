import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { authGuard } from '../../guards/auth.guard';
import { ListadoRepartidoresComponent } from './listado-repartidores/listado-repartidores.component';
import { DetalleRepartidorComponent } from './detalle-repartidor/detalle-repartidor.component';

const routes: Routes = [

  { path: 'alta-repartidor', component: AltaRepartidorComponent},
  { path: 'listado-repartidores', component: ListadoRepartidoresComponent  },
  { path: 'detalle-repartidor', component: DetalleRepartidorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
