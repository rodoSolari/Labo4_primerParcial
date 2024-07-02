import { Component, EventEmitter } from '@angular/core';
import { HeladoService } from '../../../servicios/helado.service';

@Component({
  selector: 'app-lista-helados',
  templateUrl: './lista-helados.component.html',
  styleUrl: './lista-helados.component.scss'
})
export class ListaHeladosComponent {
  helados!: any[];
  selectedHelado: any;
  heladoSeleccionado = new EventEmitter<any>();

  constructor(private heladoService: HeladoService) {}

  ngOnInit(): void {
    this.heladoService.traerHelados().subscribe(helados => {
      this.helados = helados;
    });
  }

  selectHelado(helado: any): void {
    this.selectedHelado = helado;
    this.heladoSeleccionado.emit(helado);
  }

  agregarHelado(helado: any): void {
    this.helados.push(helado);
    this.selectedHelado = null;
  }

  actualizarHelados(): void {
    this.heladoService.traerHelados().subscribe(helados => {
      this.helados = helados;
      this.selectedHelado = null;
    });
  }

  eliminarHelado(): void {
    this.actualizarHelados();
  }

  esSeleccionado(helado: any): boolean {
    return this.selectedHelado && this.selectedHelado.id === helado.id;
  }
}
