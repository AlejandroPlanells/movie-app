import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterfacePeliculas } from 'src/app/models/InterfacePeliculas.interface';
import { PeliculasService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {
  results: Observable<InterfacePeliculas>;
  term: string="";

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
  }

  searchChanged(e): void{
    this.results = this.peliculasService.searchMovies(this.term);

  }

}
