import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private httpcliente:HttpClient) { }
  key:string = '9c46173e953a4fc9899627f3e8565d34';
  url:string = 'https://newsapi.org/v2/top-headlines?';

  getNoticias(parametros:any):Observable<any>{
    const peticion = `${this.url}country=${parametros.country.value}&category=${parametros.category.value}&apiKey=${this.key}`;
    return this.httpcliente.get(peticion);
  }

  getAllNews(){
    const peticion = `${this.url}apiKey=${this.key}`;
    return this.httpcliente.get(peticion);
  }
}
