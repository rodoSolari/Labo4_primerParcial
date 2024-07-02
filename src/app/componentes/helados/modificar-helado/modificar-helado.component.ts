import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HeladoService } from '../../../servicios/helado.service';

@Component({
  selector: 'app-modificar-helado',
  templateUrl: './modificar-helado.component.html',
  styleUrl: './modificar-helado.component.scss'
})
export class ModificarHeladoComponent {
  @Input() helado: any;
  @Input() heladoSeleccionado!: EventEmitter<any>;
  @Output() heladoModificado = new EventEmitter<void>();
  heladoForm: FormGroup;

  constructor(private fb: FormBuilder, private heladoService: HeladoService) {
    this.heladoForm = this.fb.group({
      tipo: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(1)]],
      peso: ['', [Validators.required, Validators.min(250), Validators.max(1000)]],
    });
  }

  ngOnInit(): void {
    this.heladoSeleccionado.subscribe(helado => {
      this.setHelado(helado);
    });
    this.resetFormulario();
  }

  setHelado(helado: any): void {
    this.helado = helado;
    this.actualizarFormulario();
  }

  actualizarFormulario(): void {
    if (this.helado) {
      this.heladoForm.patchValue({
        tipo: this.helado.tipo,
        precio: this.helado.precio,
        peso: this.helado.peso
      });
    }
  }

  resetFormulario(): void {
    this.heladoForm.reset({
      tipo: '',
      precio: '',
      peso: ''
    });
  }

  modificarHelado(): void {
    if (this.heladoForm.valid) {
      const updatedHelado = {
        ...this.helado,
        ...this.heladoForm.value
      };
      this.heladoService.modificarHelado(this.helado.id, updatedHelado).then(() => {
        this.heladoModificado.emit();
      });
    }
  }
}
