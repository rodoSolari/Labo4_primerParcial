import { Component, Input } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrl: './detalle-repartidor.component.scss'
})
export class DetalleRepartidorComponent {
  @Input() repartidor: any;

  ngOnInit(): void {}
}
