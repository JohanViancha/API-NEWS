import { Component } from '@angular/core';
import { NewsServiceService } from './service/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-api';
  loading:boolean;
  news = [];
  filtros:any=[];
  filtroEliminar:string;
  constructor(private service_news: NewsServiceService){
    this.loading = false;
    this.filtroEliminar = '';
  }

  buscarNoticias(parametros:any){
    this.loading = true;
    this.filtros = Object.values(parametros).filter((element)=>element);
     this.service_news.getNoticias(parametros).subscribe(data=>{
        this.loading = false;
        this.news = data;
    });
  }

  eliminarFiltro(filtro:any){
    this.filtroEliminar = filtro;
  }
}
