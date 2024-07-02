import { Injectable } from '@angular/core';
import { Firestore, QuerySnapshot, addDoc, collection, collectionData, doc, getDoc, getDocs, getFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable, of, switchMap } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listadoUsuario : any[]=[];

  constructor(private firestore : Firestore, private auth:AngularFireAuth, private db : AngularFirestore,private router: Router) { }

  //se registra el mail de usuario y la fecha de logueo
  public subirLog( email: string, date:string){
    const col = collection(this.firestore,'logs');
    addDoc(col,{
      nombre: email,
      date: date
    });
  }


  public login(email : string, password: string){
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //cerrar sesion
  public logout(){
    this.auth.signOut();
    this.router.navigate(['/bienvenido']);
  }

  //Para verificar si el usuario está logueado
  public userLogged(){
    return this.auth.authState;
  }

  public obtenerDatosUsuario(): Observable<any> {
    console.log(this.auth.authState);
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.db.collection('Usuarios').doc(user.uid).valueChanges();
        } else {
          return of([null]);
        }
      })
    );

  }

  public traer(){
    const col = collection(this.firestore,'Usuarios');
    const observable = collectionData(col);

    observable.subscribe((respuesta) => {
      console.log(respuesta);
    })
  }

  public traerUsuario(id : string){
    const col = collection(this.firestore,'Usuarios');
    const documento = doc(col,id);
    return getDoc(documento);
  }

}
