import { Component,Input } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  @Input()cartelera: any;
  @Input()pelispopularesN: any;
  @Input()pelispopulares: any;


  constructor(public peliculas:PeliculasService) {
    this.peliculas.getCartelera().subscribe(( data: any) => {
      console.log(data);
      this.cartelera = data;
    }); 
    this.peliculas.getPopularesNi().subscribe((data: any) =>{
      // console.log(data);
      this.pelispopularesN = data;
    } );
    this.peliculas.getPopulares().subscribe((data: any )=>{
      // console.log(data);
      this.pelispopulares = data;
    });

   }

}
