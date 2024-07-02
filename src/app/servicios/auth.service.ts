import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, doc, getDoc, setDoc, updateDoc } from '@angular/fire/firestore';
import { Observable, from, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private firestore : Firestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return of(user);
        } else {
          return of(null);
        }
      })
    );
  }

  getUser(): Observable<any> {
    return this.user$;
  }

  logout() {
    return this.afAuth.signOut();
  }

  getUserRole(): Observable<string | null> {
    return this.user$.pipe(
      switchMap(user => {
        if (!user) {
          return of(null);
        }
        const userDocRef = doc(this.firestore, `Usuarios/${user.uid}`);
        console.log(userDocRef);
        return from(getDoc(userDocRef)).pipe(
          map(docSnapshot => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              return userData ? userData['tipoUsuario'] : null;
            } else {
              return null;
            }
          })
        );
      })
    );
  }

  crearUsuario(user: any, firstName: string, lastName: string) {
    const userDocRef = doc(this.firestore, `Usuarios/${user.uid}`);
    return from(setDoc(userDocRef, {
      //uid: user.uid,
      firstName: firstName,
      lastName: lastName,
      tipoUsuario: 'empleado' // Se añade aquí
    }));
  }

  modificarUsuario(email: string) {
    return this.user$.pipe(
      switchMap(user => {
        if (!user) {
          return of(null);
        }
        const userDocRef = doc(this.firestore, `Usuarios/${user.uid}`);
        return from(updateDoc(userDocRef, { email: email }));
      })
    );
  }

}
