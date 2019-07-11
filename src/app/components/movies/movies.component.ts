import { Component, OnInit } from '@angular/core';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  
  moviePopulars = [];
  movieCooming = [];
  movieTop = [];
  moviePlay = [];
  p: number = 1;
  public categoryMovie = 1; 
  movieSearch = [];
  searching = 0
  public imgURL = 'https://image.tmdb.org/t/p/w500'

  constructor(private spinner: NgxSpinnerService,private _TMDBApiService:TMDBApiServiceService) { }

  ngOnInit() {
    
    this._TMDBApiService.getPopularMovies(1).then(data=>this.moviePopulars= data.results)
    this._TMDBApiService.getPopularMovies(2).then(data=>this.moviePopulars= this.moviePopulars.concat(data.results) )
    this._TMDBApiService.getPopularMovies(3).then(data=>this.moviePopulars= this.moviePopulars.concat(data.results))
    
    this._TMDBApiService.getTopRatedMovies(1).then(data=>this.movieTop= data.results)
    this._TMDBApiService.getTopRatedMovies(2).then(data=>this.movieTop= this.movieTop.concat(data.results))
    this._TMDBApiService.getTopRatedMovies(3).then(data=>this.movieTop= this.movieTop.concat(data.results))
    
    this._TMDBApiService.getCoomingSoonMovies(1).then(data=>this.movieCooming= data.results)
    this._TMDBApiService.getCoomingSoonMovies(2).then(data=>this.movieCooming= this.movieCooming.concat(data.results))
    this._TMDBApiService.getCoomingSoonMovies(3).then(data=>this.movieCooming= this.movieCooming.concat(data.results))

    this._TMDBApiService.getNowPlayingMovies(1).then(data=>this.moviePlay= data.results)
    this._TMDBApiService.getNowPlayingMovies(2).then(data=>this.moviePlay= this.moviePlay.concat(data.results))
    this._TMDBApiService.getNowPlayingMovies(3).then(data=>this.moviePlay= this.moviePlay.concat(data.results))
      
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(()=>{
    },4000);
  }
  actual(){
    switch(this.categoryMovie){
        case 1:
        this.searching = 0
          return this.moviePopulars
        case 2:
          this.searching = 0
          return this.movieCooming
        case 3:
          this.searching = 0
          return this.movieTop
        case 4:
          this.searching = 0
          return this.moviePlay
        case 5:
          if(this.searching ===0 ){
            var query = (document.getElementById('query') as HTMLInputElement).value
            this.search(query)
          }
         
          this.searching =1
          return this.movieSearch
        
    }
  }

  search(name){
    this._TMDBApiService.searchMovie(name).then(data=>this.movieSearch = data.results)
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(()=>{
      if(this.movieSearch.length ===0){
        let b = document.getElementById('listMov')
        let c = document.createElement('h3')
        c.innerHTML = "Not Found Movie"
        b.appendChild(c)
      }
      
    },2000);

  }

  selected(option){
    let a = document.getElementById('option')
    let b = document.getElementById('listMov')
    var child = b.lastElementChild;  
        while (child) { 
            b.removeChild(child); 
            child = b.lastElementChild; 
        }
    this.p =1
    switch(option){
      case 1:
        a.innerHTML = 'Popular Movies'
        this.categoryMovie = 1
        
        break;
      case 2:
        a.innerHTML = 'Coming Soon'
        
        this.categoryMovie = 2

        break;
      case 3:
        a.innerHTML = 'Top Rated'
        this.categoryMovie = 3
        break;
      case 4:
        a.innerHTML = 'Now Playing'
        this.categoryMovie = 4
        break;
      case 5:
        a.innerHTML = "Movie Search"
        this.searching =0
        this.categoryMovie = 5
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
