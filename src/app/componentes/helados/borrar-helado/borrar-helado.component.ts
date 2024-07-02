import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeladoService } from '../../../servicios/helado.service';

@Component({
  selector: 'app-borrar-helado',
  templateUrl: './borrar-helado.component.html',
  styleUrl: './borrar-helado.component.scss'
})
export class BorrarHeladoComponent {
  @Input() helado: any;
  @Output() heladoBorrado = new EventEmitter<void>();

  constructor(private heladoService: HeladoService) {}

  borrarHelado(): void {
    if (this.helado) {
      this.heladoService.borrarHelado(this.helado.id).then(() => {
        this.heladoBorrado.emit();
      });
    }
  }
}
