import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeladoService } from '../../../servicios/helado.service';

@Component({
  selector: 'app-crear-helado',
  templateUrl: './crear-helado.component.html',
  styleUrl: './crear-helado.component.scss'
})
export class CrearHeladoComponent {
  @Output() heladoCreado = new EventEmitter<any>();
  heladoForm: FormGroup;

  constructor(private fb: FormBuilder, private heladoService: HeladoService) {
    this.heladoForm = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['agua', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000)]],
    });
  }

  crearHelado(): void {
    if (this.heladoForm.valid) {
      this.heladoService.agregarHelado(this.heladoForm.value).then(() => {
        this.heladoCreado.emit(this.heladoForm.value);
        this.heladoForm.reset();
      });
    }
  }
}
