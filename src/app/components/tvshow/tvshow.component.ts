import { Component, OnInit } from '@angular/core';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TVshowComponent implements OnInit {
  tvPopular = []
  tvTopRated = []
  tvAiringToday = []
  tvOnAir = []
  p:number =1
  public categoryTv = 1;
  tvSearch = [];
  searching = 0
  public imgURL = 'https://image.tmdb.org/t/p/w500'
  constructor(private spinner: NgxSpinnerService,private _TMDBApiService:TMDBApiServiceService) { }

  ngOnInit() {
    this._TMDBApiService.getPopularTv(1).then(data=>this.tvPopular= data.results)
    this._TMDBApiService.getPopularTv(2).then(data=>this.tvPopular= this.tvPopular.concat(data.results))
    this._TMDBApiService.getPopularTv(3).then(data=>this.tvPopular= this.tvPopular.concat(data.results))

    this._TMDBApiService.getTopRatedTv(1).then(data=>this.tvTopRated= data.results)
    this._TMDBApiService.getTopRatedTv(2).then(data=>this.tvTopRated= this.tvTopRated.concat(data.results))
    this._TMDBApiService.getTopRatedTv(3).then(data=>this.tvTopRated= this.tvTopRated.concat(data.results))

    this._TMDBApiService.getAiringToday(1).then(data=>this.tvAiringToday= data.results)
    this._TMDBApiService.getAiringToday(2).then(data=>this.tvAiringToday= this.tvAiringToday.concat(data.results))
    this._TMDBApiService.getAiringToday(3).then(data=>this.tvAiringToday= this.tvAiringToday.concat(data.results))

    this._TMDBApiService.getOnTheAirTv(1).then(data=>this.tvOnAir= data.results)
    this._TMDBApiService.getOnTheAirTv(2).then(data=>this.tvOnAir= this.tvOnAir.concat(data.results))
    this._TMDBApiService.getOnTheAirTv(3).then(data=>this.tvOnAir= this.tvOnAir.concat(data.results))
    
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(()=>{
    },4000);

  }

  actual(){
    switch(this.categoryTv){
        case 1:
        this.searching = 0
          return this.tvPopular
        case 2:
          this.searching = 0
          return this.tvAiringToday
        case 3:
          this.searching = 0
          return this.tvTopRated
        case 4:
          this.searching = 0
          return this.tvOnAir
        case 5:
          if(this.searching ===0 ){
            var query = (document.getElementById('query') as HTMLInputElement).value
            this.search(query)
          }
         
          this.searching =1
          
          return this.tvSearch
        
    }
  }

  search(name){
    this._TMDBApiService.searchTv(name).then(data=>this.tvSearch = data.results)
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    
    setTimeout(()=>{
      
      if(this.tvSearch.length === 0){
        let b = document.getElementById('listTv')
        let c = document.createElement('h3')
        c.innerHTML = "Not Found TV Show"
        b.appendChild(c)
      }
    },2000);

  }

  selected(option){
    let a = document.getElementById('option')
    let b = document.getElementById('listTv')
    var child = b.lastElementChild;  
        while (child) { 
            b.removeChild(child); 
            child = b.lastElementChild; 
        }
    this.p =1
    switch(option){
      case 1:
        a.innerHTML = 'Popular TV Shows'
        this.categoryTv = 1
        
        break;
      case 2:
        a.innerHTML = 'TV Shows Airing Today'
        
        this.categoryTv = 2

        break;
      case 3:
        a.innerHTML = 'Top Rated'
        this.categoryTv = 3
        break;
      case 4:
        a.innerHTML = 'TV Shows On Air'
        this.categoryTv = 4
        break;
      case 5:
        a.innerHTML = "TV Show Search"
        this.searching =0
        this.categoryTv = 5
        break;

    }
  }



  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  recortar(texto){ 
   
    if(window.matchMedia("(max-width: 767px)").matches){
      if(texto.length >=130){

        let textRecortado= texto.slice(0,130)
        
        return textRecortado+"..."
  
      }
      else{
        return texto
      }
    }else{
      if(texto.length >=400){

        let textRecortado= texto.slice(0,400)
        
        return textRecortado+"..."
  
      }
      else{
        return texto
      }
    }
    

  }

}
