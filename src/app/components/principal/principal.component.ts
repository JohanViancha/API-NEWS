import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DatetimeService } from 'src/app/service/datetime.service';
import { FilterService } from 'src/app/service/filter.service';
import { NewsServiceService } from 'src/app/service/news-service.service';


import Swal from 'sweetalert2'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit, OnChanges {

  @Output() parametroSeleccionados = new EventEmitter<any>();
  @Input() filtroEliminar: string;
  showMenuCategory:boolean;
  showMenuCountry:boolean;
  filtroCategory: string;
  filtroCountry:string;
  countries:any[];
  categories:any[];
  wordSearch:any;
  loading:boolean;
  parametros:any;

  constructor(private serviceFilter:FilterService) {
    this.parametros = {};
    this.filtroEliminar = '';
    this.loading = false;
    this.filtroCategory = 'Categorías';
    this.filtroCountry = 'Países'
    this.showMenuCategory = false;
    this.showMenuCountry = false;
    this.countries = serviceFilter.getCountries();
    this.categories = serviceFilter.getCategories();
    this.wordSearch = undefined;
    }

  ngOnInit(): void {
  }

  showCategory():void{
      this.showMenuCategory = !this.showMenuCategory;
      this.showMenuCountry = false;
  }

  showCountry():void{
    this.showMenuCountry = !this.showMenuCountry;
    this.showMenuCategory = false;
}

  async searchNews(){
    const validate = await this.validateFilter();

    if(validate){
      this.showMenuCategory = false;
      this.showMenuCountry = false;
      this.parametros = {
        'category':this.categories.find(category=>category.label == this.filtroCategory),
        'country':this.countries.find(country=>country.label == this.filtroCountry)
      }
      if(this.wordSearch){
        this.parametros['q'] = {'q':this.wordSearch,'label':this.wordSearch};
      }

      this.parametroSeleccionados.emit(this.parametros);
    }

  }

  selectCountry(country:number):void{
    this.filtroCountry = this.countries[country].label;
  }
  selectCategory(category:number):void{
    this.filtroCategory = this.categories[category].label;

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.deleteFilter();
  }
  deleteFilter(){
    switch (this.filtroEliminar){
      case 'q':
        delete this.parametros.q;
        this.wordSearch = undefined;
      break;
      case 'category':
        delete this.parametros.category;
        this.filtroCategory = 'Categorías'
      break;

      case 'country':
        delete this.parametros.country;
        this.filtroCountry = 'Países';
      break;
    }



  }


  validateFilter():Promise<boolean>{
    return new Promise((resolve,reject)=>{
      if(this.filtroCategory === 'Categorías' && this.filtroCountry === 'Países' && !this.wordSearch){
        Swal.fire('Busqueda invalida', 'Seleccione algun filtro','warning').then(()=>resolve(false));
      }else{
        resolve(true);
      }
    });

  }




}
