import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/pelicula.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pelicula',
  templateUrl: './detalles-pelicula.page.html',
  styleUrls: ['./detalles-pelicula.page.scss'],
})
export class DetallesPeliculaPage implements OnInit {
  content: any = null;
  constructor(private peliculasService: PeliculasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasService.getDetails(id).subscribe(result => this.content = result);
  }

}
