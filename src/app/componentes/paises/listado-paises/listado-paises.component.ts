import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../servicios/api.service';

@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrl: './listado-paises.component.scss'
})
export class ListadoPaisesComponent {
  paises: any[] = [];
  paisSeleccionado: string | null = null;
  @Output() paisSeleccionadoChange = new EventEmitter<string>();

  constructor(private apiPaises : ApiService) { }

  ngOnInit(): void {
    this.apiPaises.devolverPaises().subscribe(paises => {
      this.paises = paises.filter(pais => pais.region === 'Africa' || pais.region === 'Europe').slice(0, 3);
    });
  }

  seleccionarPais(nombre: string): void {
    this.paisSeleccionado = nombre;
    this.paisSeleccionadoChange.emit(nombre);
  }
}
