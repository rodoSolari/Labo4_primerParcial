import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesRoutingModule } from './paises-routing.module';
import { ListadoPaisesComponent } from './listado-paises/listado-paises.component';
import { DetallePaisComponent } from './detalle-pais/detalle-pais.component';



@NgModule({
  declarations: [
      ListadoPaisesComponent,
      DetallePaisComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule
  ],
  exports: [
    ListadoPaisesComponent,
    DetallePaisComponent
  ]
})
export class PaisesModule { }
