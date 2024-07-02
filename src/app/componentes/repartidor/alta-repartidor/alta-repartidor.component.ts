import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RepartidorService } from '../../../servicios/repartidor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.scss'
})
export class AltaRepartidorComponent implements OnInit {
  paises: any[] = [];
  @Output() paisSeleccionado = new EventEmitter<string>();
  repartidorForm: FormGroup;

  constructor(private fb: FormBuilder, private repartidorService: RepartidorService, private router: Router) {
    this.repartidorForm = this.fb.group({
      dni: ['',[Validators.required,Validators.min(11111111),Validators.max(99999999),Validators.minLength(8),Validators.minLength(8)]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18),Validators.max(80)]],
      capacidadTransporte: ['', Validators.required],
      pais: ['', Validators.required],
      unidadPropia: [false]
    });
  }

  ngOnInit(): void { }

  registrarRepartidor(): void {
    if (this.repartidorForm.valid) {
      this.repartidorService.addRepartidor(this.repartidorForm.value)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso',
            text: 'El repartidor ha sido registrado correctamente.'
          });
          this.repartidorForm.reset();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Hubo un problema al registrar el repartidor: ' + error.message
          });
        });
    }
  }

   actualizarPais(pais: string): void {
    this.repartidorForm.patchValue({ pais: pais });
  }

}
