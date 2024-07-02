import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-repartidores',
  templateUrl: './listado-repartidores.component.html',
  styleUrl: './listado-repartidores.component.scss'
})
export class ListadoRepartidoresComponent {
  repartidores$: Observable<any[]>;
  selectedRepartidor: any = {};

  constructor(private firestore: Firestore) {
    const repartidoresCollection = collection(firestore, 'repartidores');
    this.repartidores$ = collectionData(repartidoresCollection, { idField: 'id' });
  }

  ngOnInit(): void {}

  seleccionarRepartidor(repartidor: any): void {
    this.selectedRepartidor = repartidor;
  }
}
