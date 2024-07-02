import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { ListadoRepartidoresComponent } from './listado-repartidores/listado-repartidores.component';
import { DetalleRepartidorComponent } from './detalle-repartidor/detalle-repartidor.component';
import { PaisesModule } from '../paises/paises.module';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    ListadoRepartidoresComponent,
    DetalleRepartidorComponent],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PaisesModule
  ]
})
export class RepartidorModule { }
