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

  getNoticias(parametros:any[]):Observable<any>{
    const peticion = `${this.url}${this.setUpUrl(parametros)}apiKey=${this.key}`;
    console.log(peticion);
    return this.httpcliente.get(peticion);
  }

  setUpUrl(parametros:any[]):any{
      let paramValues = Object.values(parametros).filter((element)=>element);
      let stringUrl = '';
      paramValues.forEach(element => stringUrl+= `${Object.keys(element)[0]}=${Object.values(element)[0]}&`);
      console.log(stringUrl);
      return stringUrl;
  }

}
