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
  filtros=[];
  constructor(private service_news: NewsServiceService){

  }
  buscarNoticias(parametros:any){
    this.filtros = Object.values(parametros);
    console.log(this.filtros);
     this.service_news.getNoticias(parametros).subscribe(data=>{
      this.news = data;
    });
  }
}
