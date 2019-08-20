import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { WebsocketService } from './websocket.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { BotonEnviarComponent } from './componentes/boton-enviar/boton-enviar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyOwnCustomMaterialModule } from './material';
import { BarraTextoComponent } from './componentes/barra-texto/barra-texto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BotonEnviarComponent,
    BarraTextoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule
    //WebsocketService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
