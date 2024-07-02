import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DocumentReference, Firestore, QuerySnapshot, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument, DocumentData } from '@angular/fire/compat/firestore';
import { UserMetadata, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable, switchMap } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  tipoUsuarioLogueado: any;
  usuariologeado: any;

  constructor(public authService: AuthService, private firestore : Firestore, private route: Router) {}

  ngOnInit(): void {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.usuariologeado = user;
        const userDocRef = doc(this.firestore, `Usuarios/${user.uid}`);
        getDoc(userDocRef).then(docSnapshot => {
          if(docSnapshot.exists()){
            const usuarioData = docSnapshot.data();
            if(usuarioData) {
              this.tipoUsuarioLogueado = usuarioData['tipoUsuario'];
              console.log("Tipo de usuario logueado: " + this.tipoUsuarioLogueado);
            }
          }else{
              console.log('No se encontró el documento del usuario');
          }
        }).catch(error => {
          console.error('Error al obtener usuarios:', error);
        });
      } else {
        console.log('No hay usuario logueado');
      }
    });
  }

  public getUser(): Observable<any> {
    return this.authService.getUser();
  }

  logout() {
    console.log("cerrando sesion..");
    this.route.navigate(['/bienvenido']);
    this.authService.logout().then(() => {
      this.usuariologeado = null;
      this.tipoUsuarioLogueado = null;
    });

  }

}
