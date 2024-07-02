import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeladosRoutingModule } from './helados-routing.module';
import { ListaHeladosComponent } from './lista-helados/lista-helados.component';
import { CrearHeladoComponent } from './crear-helado/crear-helado.component';
import { ModificarHeladoComponent } from './modificar-helado/modificar-helado.component';
import { BorrarHeladoComponent } from './borrar-helado/borrar-helado.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListaHeladosComponent,
    CrearHeladoComponent,
    ModificarHeladoComponent,
    BorrarHeladoComponent
  ],
  imports: [
    CommonModule,
    HeladosRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ListaHeladosComponent,
    CrearHeladoComponent,
    ModificarHeladoComponent,
    BorrarHeladoComponent
  ]
})
export class HeladosModule { }
