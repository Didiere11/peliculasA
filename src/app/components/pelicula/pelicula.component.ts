import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula:any;
  RegresarA:string =""; 
  busqueda:string = "";
  constructor(public peliculas: PeliculasService,
    public route: ActivatedRoute) {
      this.route.params .subscribe( parametros =>{
        // console.log(parametros);
      this.RegresarA = parametros['pag'];

      if (parametros['busqueda']) {
        this.busqueda =  parametros['busqueda'];
      }

        this.peliculas.getPelicula(parametros ['id'])
                      .subscribe(pelicula => {
                        this.pelicula = pelicula;
                        console.log(pelicula);
                      });
      })
     }

  ngOnInit() {
  }

}
