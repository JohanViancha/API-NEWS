import { Component } from '@angular/core';
import { NewsServiceService } from './service/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-api';

  news = [];
  filtros:any=[];
  constructor(private service_news: NewsServiceService){

  }
  buscarNoticias(parametros:any){
    this.filtros = Object.values(parametros).filter((element)=>element);
    console.log(this.filtros);
     this.service_news.getNoticias(parametros).subscribe(data=>{
        this.news = data;
    });
  }
}
