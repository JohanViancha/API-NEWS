import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  categories:any[]=[
    {value:'general', label:'General'},
    {value:'business',label:'Negocios'},
    {value:'entertainment',label:'Entretenimiento'},
    {value:'technology',label:'Tecnología'},
    {value:'science',label:'Ciencia'},
  ];

  countries:any[]=[
    {value:'us', label:'Estados Unidos'},
    {value:'ar',label:'Argentina'},
    {value:'co',label:'Colombia'},
    {value:'mx',label:'México'},
    {value:'ve',label:'Venezuela'}
  ];


  constructor() { }

  getCountries():any[]{
    return this.countries;
  }

  getCategories():any[]{
    return this.categories;
  }
}
