import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.scss'
})
export class DetallePaisComponent {
  @Input() pais!: string;
  paisData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarDatosPais();
  }

  ngOnChanges(): void {
    this.cargarDatosPais();
  }

  private cargarDatosPais(): void {
    if (this.pais) {
      this.http.get<any[]>(`https://restcountries.com/v3.1/name/${this.pais}`).subscribe(data => {
        if (data && data.length > 0) {
          this.paisData = data[0];
        }
      });
    }
  }
}
