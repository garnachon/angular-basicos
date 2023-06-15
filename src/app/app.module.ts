import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component'; //remover esta linea

// Tarea;
// crear un modulo llamado contadorModule
// en el cual como no hay ngif ni ngfor no hay que imporytar nada
// hay que hacer declaraciones y exportaciones
// tengo que agregar en los imports aqui en este archivo y asegurar que la aplicacion funcione

import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent //remover esta linea
   
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule, // importar aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
