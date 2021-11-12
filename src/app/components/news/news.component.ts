import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  dateTime:string;

  constructor(private service_news:NewsServiceService, private service_datetime:DatetimeService) {
    this.datos =[];
    this.filtros = [];
    let date = new Date();
    this.dateTime = `${this.service_datetime.day.find(day=>day.value==date.getDay()).name}, ${date.getDate()} de ${this.service_datetime.month.find(month=>month.value==date.getUTCMonth()).name} del ${date.getFullYear()}`;
   }



  ngOnInit(): void {

  }



}
