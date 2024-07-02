import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListaHeladosComponent } from './lista-helados/lista-helados.component';
import { CrearHeladoComponent } from './crear-helado/crear-helado.component';
import { ModificarHeladoComponent } from './modificar-helado/modificar-helado.component';
import { BorrarHeladoComponent } from './borrar-helado/borrar-helado.component';
import { authGuard } from '../../guards/auth.guard';

const routes: Routes = [
  { path: 'lista-helados', component: ListaHeladosComponent},
  { path: 'crear-helado', component: CrearHeladoComponent },
  { path: 'modificar-helado', component: ModificarHeladoComponent },
  { path: 'borrar-helado', component: BorrarHeladoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeladosRoutingModule { }
