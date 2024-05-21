import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrl: './alta-repartidor.component.scss'
})
export class AltaRepartidorComponent {

  repartidorForm: FormGroup;

  constructor(private fb: FormBuilder, private firestore: Firestore, private router: Router) {
    this.repartidorForm = this.fb.group({
      dni: ['',[Validators.required,Validators.min(11111111),Validators.max(99999999),Validators.minLength(8),Validators.minLength(8)]],
      nombre: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18),Validators.max(99)]],
      capacidadTransporte: ['', Validators.required],
      pais: ['', Validators.required],
      unidadPropia: [false]
    });
  }
  async enviarForm() {
    if (this.repartidorForm.valid) {
      const repartidorData = this.repartidorForm.value;
      const repartidoresRef = collection(this.firestore, 'repartidores');

      await addDoc(repartidoresRef, repartidorData);
      this.router.navigate(['/bienvenido']);
    }
  }

  onPaisSeleccionado(pais: string): void {
    this.repartidorForm.patchValue({ pais });
  }


}
