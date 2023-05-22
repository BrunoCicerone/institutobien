import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';
import { ContenidoUSUARIOS } from './mock-datos';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private usuariosUrl = 'api/usuarios';  // URL to web api (mas adelante HTTP)
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getUsuarios(): Observable<Usuario[]> {

    //cambiamos la llamada de la lista de usuaruios local por llamada HTTP
    //const listaObservabledeUsuarios = of(ContenidoUSUARIOS);
    //llamada a enviar el mensaje
    this.messageService.add('Servicio de usuarios: Usuarios recuperados')
    //return listaObservabledeUsuarios;
    return this.http.get<Usuario[]>(this.usuariosUrl)

  }
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
