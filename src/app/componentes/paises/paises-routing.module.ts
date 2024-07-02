import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';

const routes: Routes = [
  { path: '', component: ListadoPaisesComponent },
  { path: 'detalle-pais', component: DetallePaisComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PaisesRoutingModule { }
