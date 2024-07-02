import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  constructor(private firestore: Firestore) {}

  addRepartidor(repartidor: any) {
    const repartidorCollection = collection(this.firestore, 'repartidores');
    return addDoc(repartidorCollection, repartidor);
  }
}
