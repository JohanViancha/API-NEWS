import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  categories:any[]=[
    {category:'general', label:'General'},
    {category:'business',label:'Negocios'},
    {category:'entertainment',label:'Entretenimiento'},
    {category:'technology',label:'Tecnología'},
    {category:'science',label:'Ciencia'},
  ];

  countries:any[]=[
    {country:'us', label:'Estados Unidos'},
    {country:'ar',label:'Argentina'},
    {country:'co',label:'Colombia'},
    {country:'mx',label:'México'},
    {country:'ve',label:'Venezuela'}
  ];


  constructor() { }

  getCountries():any[]{
    return this.countries;
  }

  getCategories():any[]{
    return this.categories;
  }
}
