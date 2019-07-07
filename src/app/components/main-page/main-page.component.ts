import { Component, OnInit } from '@angular/core';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  public movies = []
  public tvs = []
  public actors = []
  public imgURL = 'https://image.tmdb.org/t/p/w500'
  page = 1;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  constructor(private _TMDBApiService:TMDBApiServiceService) { }
  ngOnInit() {
      this._TMDBApiService.getPopularMovies(1).then(data=>this.movies= data.results)
      this._TMDBApiService.getPopularMovies(2).then(data=>this.movies= this.movies.concat(data.results) )
      this._TMDBApiService.getPopularMovies(3).then(data=>this.movies= this.movies.concat(data.results))

      this._TMDBApiService.getPopularTv(1).then(data=>this.tvs= data.results)
      this._TMDBApiService.getPopularTv(2).then(data=>this.tvs= this.tvs.concat(data.results) )
      this._TMDBApiService.getPopularTv(3).then(data=>this.tvs= this.tvs.concat(data.results))

      this._TMDBApiService.getPopularActor(1).then(data=>this.actors= data.results)
      this._TMDBApiService.getPopularActor(2).then(data=>this.actors= this.actors.concat(data.results) )
      this._TMDBApiService.getPopularActor(3).then(data=>this.actors= this.actors.concat(data.results))

  
      setTimeout(()=>{
      console.log('this movie', this.movies)
    },4000);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  

}
