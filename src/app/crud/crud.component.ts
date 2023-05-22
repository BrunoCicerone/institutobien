import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  usuarios: any[] = [];
  usuario: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerUsuarios();
  }

  obtenerUsuarios() {
    this.http.get<any[]>('URL_DEL_BACKEND/crud.php').subscribe(
      response => {
        this.usuarios = response;
      },
      error => {
        console.error('Error al obtener los usuarios:', error);
      }
    );
  }

  guardarUsuario() {
    if (this.usuario.dni) {
      this.actualizarUsuario();
    } else {
      this.crearUsuario();
    }
  }

  crearUsuario() {
    this.http.post('URL_DEL_BACKEND/crud.php', this.usuario).subscribe(
      response => {
        console.log('Usuario creado exitosamente');
        this.obtenerUsuarios();
        this.usuario = {};
      },
      error => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }

  editarUsuario(usuario: any) {
    this.http.put(`URL_DEL_BACKEND/crud.php?dni=${usuario.dni}`, usuario).subscribe(
      response => {
        console.log('Usuario actualizado exitosamente');
        this.obtenerUsuarios();
        this.usuario = {};
      },
      error => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }

  eliminarUsuario(dni: string) {
    this.http.delete(`URL_DEL_BACKEND/crud.php?dni=${dni}`).subscribe(
      response => {
        console.log('Usuario eliminado exitosamente');
        this.obtenerUsuarios();
      },
      error => {
        console.error('Error al eliminar el usuario:', error);
      }
    );
  }
}
