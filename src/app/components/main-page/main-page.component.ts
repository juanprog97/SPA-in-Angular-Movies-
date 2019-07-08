import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  providers: [NgbRatingConfig ],
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
  public movies = []
  public tvs = []
  public actors = []
  public imgURL = 'https://image.tmdb.org/t/p/w500'


  images = [];

  constructor(private _TMDBApiService:TMDBApiServiceService,config: NgbRatingConfig) { config.readonly = true;}
  ngOnInit() {
      this._TMDBApiService.getPopularMovies(1).then(data=>this.movies= data.results)
      this._TMDBApiService.getPopularMovies(2).then(data=>this.movies= this.movies.concat(data.results) )
      this._TMDBApiService.getPopularMovies(3).then(data=>this.movies= this.movies.concat(data.results))
      setTimeout(()=>{
      },4000);
      this._TMDBApiService.getPopularTv(1).then(data=>this.tvs= data.results)
      this._TMDBApiService.getPopularTv(2).then(data=>this.tvs= this.tvs.concat(data.results) )
      this._TMDBApiService.getPopularTv(3).then(data=>this.tvs= this.tvs.concat(data.results))
      setTimeout(()=>{
      },4000);
      this._TMDBApiService.getPopularActor(1).then(data=>this.actors= data.results)
      this._TMDBApiService.getPopularActor(2).then(data=>this.actors= this.actors.concat(data.results))
      this._TMDBApiService.getPopularActor(3).then(data=>this.actors= this.actors.concat(data.results))
      setTimeout(()=>{
        console.log(this.actors)
      },4000);

      this.images = [`${this.imgURL}${this.movies[0].backdrop_path}`, `${this.imgURL}${this.tvs[0].backdrop_path}`, `${this.imgURL}${this.tvs[0].profile_path}`]
     
  
    
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  myFunction(elem){
    
    if(elem.media_type === "tv"){
      return elem.original_name;
    }
    else{
      return elem.title
    }
  }
  

}
