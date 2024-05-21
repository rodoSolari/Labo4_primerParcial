import { Component } from '@angular/core';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.scss'
})
export class BienvenidoComponent {

  infoGithub : any;

  constructor(private api: ApiService){

  }

  ngOnInit(): void {
    this.api.devolverGithub().subscribe((gitHub : any) => {
      this.infoGithub = JSON.parse(JSON.stringify(gitHub));
    });
  }
}
