import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DatetimeService } from 'src/app/service/datetime.service';
import { FilterService } from 'src/app/service/filter.service';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  @Output() parametroSeleccionados = new EventEmitter<any>();
  showMenuCategory:boolean;
  showMenuCountry:boolean;
  filtroCategory: string;
  filtroCountry:string;
  countries:any[];
  categories:any[];

  constructor(private serviceFilter:FilterService) {
    this.filtroCategory = 'Categorías';
    this.filtroCountry = 'Países'
    this.showMenuCategory = false;
    this.showMenuCountry = false;
    this.countries = serviceFilter.getCountries();
    this.categories = serviceFilter.getCategories();

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

  searchNews(){
    this.showMenuCategory = false;
    this.showMenuCountry = false;
    let paremetros = {
      'category':this.categories.find(category=>category.label == this.filtroCategory),
      'country':this.countries.find(country=>country.label == this.filtroCountry),
    }
    this.parametroSeleccionados.emit(paremetros);
  }

  selectCountry(country:number):void{
    this.filtroCountry = this.countries[country].label;
  }
  selectCategory(category:number):void{
    this.filtroCategory = this.categories[category].label;

  }


}
