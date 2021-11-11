import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  day:any[] = [
    {
      value:1,
      name:'Lunes'
    },
    {
      value:2,
      name:'Martes'
    },
    {
      value:3,
      name:'Miercoles'
    },
    {
      value:4,
      name:'Jueves'
    },
    {
      value:5,
      name:'Viernes'},
    {
      value:6,
      name:'Sabado'
    },
    {
      value:7,
      name:'Domingo'
    }

  ]

  month:any[] = [
    {
      value:0,
      name:'Enero'
    },
    {
      value:1,
      name:'Febrero'
    },
    {
      value:2,
      name:'Marzo'
    },
    {
      value:3,
      name:'Abril'
    },
    {
      value:4,
      name:'Mayo'},
    {
      value:5,
      name:'Junio'
    },
    {
      value:6,
      name:'Julio'
    },
    {
      value:7,
      name:'Agosto'
    },
    {
      value:8,
      name:'Septiembre'
    },
    {
      value:9,
      name:'Octubre'
    },
    {
      value:10,
      name:'Noviembre'
    },
    {
      value:11,
      name:'Diciembre'
    }

  ]


  constructor() { }




  getMonthAll():any[]{
    return this.month;
  }

  getDayAll():any[]{
    return this.day;
  }

}
