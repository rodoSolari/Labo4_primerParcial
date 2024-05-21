import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DocumentReference, Firestore, QuerySnapshot, collection, doc, getDoc, getDocs } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreDocument, DocumentData } from '@angular/fire/compat/firestore';
import { UserMetadata, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Observable, switchMap } from 'rxjs';
import { FirebaseApp } from '@angular/fire/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  tipoUsuarioLogueado : any;
  usuariologeado : any;

  constructor(public service : UsuarioService,private firestore: Firestore,private afAuth: AngularFireAuth) {
    const auth = getAuth();
    const col = collection(this.firestore, 'Usuarios');
    // Obtener información del usuario logueado
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const usuarioLogueadoId = user.uid;
        // Obtener datos de usuarios de Firestore
        getDocs(col).then((snapshot: QuerySnapshot<any>) => {
          snapshot.forEach(doc => {

            const usuario = doc.data();
            const usuarioId = usuario.id;

            // Comparar ID del usuario logueado con el ID del usuario actual
            if (usuarioId == usuarioLogueadoId) {
             // console.log('Este es el usuario logueado:', usuario);
              this.tipoUsuarioLogueado = usuario.tipoUsuario
              console.log("Tipo de usuario logueado: " + this.tipoUsuarioLogueado);
            }
            this.tipoUsuarioLogueado = usuario.tipoUsuario;
            return;
          });
        }).catch(error => {
          console.error('Error al obtener usuarios:', error);
        });
      } else {
        console.log('No hay usuario logueado');
      }
    });


  }

  ngOnInit(): void {

  }

  public userIsLogged(){
    return this.service.userLogged();
  }

  logout(){
    console.log("cerrando sesion..");
    this.service.logout();
  }

}
