import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  github : string = 'https://api.github.com/users/rodoSolari'
  paises : string = 'https://restcountries.com/v3.1/all'

  constructor(private http : HttpClient) { }

  devolverGithub(){
    return this.http.get(this.github);
  }

  devolverPaises(){
    return this.http.get<any[]>(this.paises).pipe(
      map(paises => paises.filter(pais =>
        pais.region.includes('Europe') || pais.region.includes('Africa')
      ))
    );
  }

}
