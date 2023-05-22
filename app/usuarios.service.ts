import { Injectable } from '@angular/core';
import { Usuario } from './usuarios';
import { ContenidoUSUARIOS } from './mock-datos';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  getUsuarios(): Observable<Usuario[]> {
    const listaObservabledeUsuarios = of(ContenidoUSUARIOS);
    return listaObservabledeUsuarios;
  }
  constructor(private messageService: MessageService) { }
}
