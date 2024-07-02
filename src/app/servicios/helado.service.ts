import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeladoService {

  constructor(private firestore: Firestore) {}

  traerHelados(): Observable<any[]> {
    const heladoCollection = collection(this.firestore, 'helados');
    return collectionData(heladoCollection, { idField: 'id' }) as Observable<any[]>;
  }

  agregarHelado(helado: any) {
    const heladoCollection = collection(this.firestore, 'helados');
    return addDoc(heladoCollection, helado);
  }

  modificarHelado(id: string, helado: any) {
    const heladoDoc = doc(this.firestore, `helados/${id}`);
    return updateDoc(heladoDoc, helado);
  }

  borrarHelado(id: string) {
    const heladoDoc = doc(this.firestore, `helados/${id}`);
    return deleteDoc(heladoDoc);
  }
}
