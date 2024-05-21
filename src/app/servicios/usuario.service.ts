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

 /* public register(email : string, password: string, nombre : string){
    return this.auth.createUserWithEmailAndPassword(email, password)
  }*/

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
          // Si el usuario está autenticado, devuelve los datos del usuario desde Firestore
          return this.db.collection('Usuarios').doc(user.uid).valueChanges();
        } else {
          // Si el usuario no está autenticado, devuelve null
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

  public traerUsuariosParte2() {
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

          if (usuarioId == usuarioLogueadoId) {
            console.log('Este es el usuario logueado:', usuario);
            return usuario.tipoUsuario;
          }
        });
      }).catch(error => {
        console.error('Error al obtener usuarios:', error);
      });
    } else {
      console.log('No hay usuario logueado');
    }
  });
  }


}
