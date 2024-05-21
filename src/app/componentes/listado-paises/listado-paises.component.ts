import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.scss'
})
export class ListadoPaisesComponent {
  paises: any[] = [];
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private apiPaises : ApiService) { }

  ngOnInit(): void {
    this.apiPaises.devolverPaises().subscribe(paises => {
      this.paises = paises.slice(0, 3);
    });
  }

  seleccionarPais(nombre: string): void {
    this.paisSeleccionado.emit(nombre);
  }
}
