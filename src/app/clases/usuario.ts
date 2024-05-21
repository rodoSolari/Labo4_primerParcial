export class Usuario {
  email : string;
  clave : string;
  tipoUsuario! : string;

  constructor(){
      this.email = "";
      this.clave = "";
  }
}
