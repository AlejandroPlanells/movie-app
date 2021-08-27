import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InterfacePeliculas } from '../models/InterfacePeliculas.interface';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url: string='';
  private apiKey: string='dbf1038d';
  constructor(private htttp: HttpClient) { }

  searchMovies(title:string){
    this.url = `http://www.omdbapi.com/?s=${encodeURI(title)}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.htttp.get<InterfacePeliculas>(this.url).pipe(map(results => results["Search"]));
  }

  getDetails(id:string){
    return this.htttp.get<InterfacePeliculas>(`http://www.omdbapi.com/?i=${id}&splot=full&apikey=${this.apiKey}`);
  }

}
