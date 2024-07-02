import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../servicios/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth } from '@angular/fire/auth';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminos-y-condiciones',
  templateUrl: './terminos-y-condiciones.component.html',
  styleUrl: './terminos-y-condiciones.component.scss'
})
export class TerminosYCondicionesComponent {
  termsForm: FormGroup;
  nombre: string;
  apellido: string;
  password: string;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.termsForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      acceptTerms: [false, Validators.requiredTrue]
    });

    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { firstName: string, lastName: string, password: string };
    this.nombre = state?.firstName;
    this.apellido = state?.lastName;
    this.password = state?.password;
  }

  onSubmit() {
    if (this.termsForm.valid) {
      const { email } = this.termsForm.value;
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, this.password)
        .then(userCredential => {
          const user = userCredential.user;
          if (user) {
            this.authService.crearUsuario(user, this.nombre, this.apellido).subscribe(() => {
              Swal.fire({
                title: 'Registro exitoso',
                text: 'Has aceptado los términos y condiciones correctamente.',
                icon: 'success',
                confirmButtonText: 'OK'
              }).then(() => {
                this.router.navigate(['/bienvenido']);
              });
            });
          }
        })
        .catch(error => {
          console.error('Error al registrar el usuario:', error);
        });
    }
  }
}
