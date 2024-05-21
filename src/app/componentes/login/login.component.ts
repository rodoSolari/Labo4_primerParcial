import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  date = new Date();
  email : string = '';
  clave : string = '';
  mensaje : string = '';
  tipoUsuario : string = '';
  usuario : Usuario;

  constructor(public service : UsuarioService, private router : Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {

  }

  login(){
    this.usuario.email = this.email;
    this.usuario.clave = this.clave;
    this.service.login(this.email,this.clave).then((userCredential) => {
      /*const date : Date = new Date();
      this.service.subirLog(this.email,date.toLocaleString());*/
     // console.log("usuario logueado correctamente " + userCredential.user?.uid);
     /* const uid = userCredential.user?.uid;
      if(uid){
        this.service.obtenerDatosUsuario(uid).subscribe((userData: any) => {
          console.log("Datos del usuario:", userData);
          // Aquí puedes procesar los datos del usuario como desees
        });
      }*/
      this.router.navigate(['bienvenido']);
    })
    .catch((error) => {
      let mensajeError: string;

      switch (error.code) {
        case 'auth/invalid-email':
          mensajeError = 'El correo electrónico proporcionado no es válido.';
          break;
        case 'auth/user-not-found':
        case 'auth/wrong-password':
          mensajeError = 'Credenciales de inicio de sesión incorrectas. Por favor, verifica tus datos.';
          break;
        // Otros casos de error pueden ser manejados de manera similar.
        default:
          mensajeError = 'Ocurrió un error durante el inicio de sesión. Por favor, inténtalo de nuevo más tarde.';
          break;
      }

      this.mensaje = mensajeError;
      console.error('Error de inicio de sesión:', error);
    });
  }

  llenarDatosEmpleado(){
    this.email = "usuarioprueba@hotmail.com"
    this.clave = "prueba123";
    this.tipoUsuario = 'empleado'
  }

  llenarDatosAdmin(){
    this.email = "admin@hotmail.com"
    this.clave = "admin123";
    this.tipoUsuario = 'admin';
  }

}
