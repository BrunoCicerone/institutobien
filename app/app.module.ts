import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogingComponent } from './loging/loging.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    LogingComponent,
    PieDePaginaComponent,
    UsuarioComponent,
    BuscadorComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
