import { Component, Input, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatetimeService } from 'src/app/service/datetime.service';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Input() datos:any;
  @Input() filtros:any;
  @Output() filtro = new EventEmitter<any>();
  dateTime:string;

  constructor(private service_news:NewsServiceService, private service_datetime:DatetimeService) {
    this.datos =[];
    this.filtros = [];
    const date = new Date();
    const dayWeek = this.service_datetime.day.find(day=>day.value==date.getDay()).name;
    const day = date.getDate();
    const month =  this.service_datetime.month.find(month=>month.value==date.getUTCMonth()).name;
    const year = date.getFullYear();
    this.dateTime = `${dayWeek}, ${day} de ${month} del ${year}`;
   }


   deleteFilter(filter:any){
      this.filtros = this.filtros.filter((element:any)=>element.label != filter.label);
      this.filtro.emit(Object.keys(filter)[0]);
   }


  ngOnInit(): void {

  }



}
