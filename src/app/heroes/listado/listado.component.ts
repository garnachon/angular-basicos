import { Component } from '@angular/core';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html', 
  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitan America'];

  heroeBorrado : string ='';

  borrarHeroe() {

    console.log('borrando...');
    //this.heroes.pop(); //este lo hice yo solo y borra desde el ultimo para arriba
    //this.heroes = []; // esto borra todos los items de una sola vez
    this.heroeBorrado = this.heroes.shift() || ''; // remueve el primer elemento del arreglo y lo retorna // 

  
    
  }
}
