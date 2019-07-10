import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailMovieComponent implements OnInit {
  public id;
  public detail=[];
  public credit = []
  public similarMovies= []
  public imgURL = 'https://image.tmdb.org/t/p/w500'
  constructor(private _TMDBApiService:TMDBApiServiceService,private _Activatedroute:ActivatedRoute) { }


  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id) 
    });
    this._TMDBApiService.getDetails(this.id).then(data=>this.detail = data);
    this._TMDBApiService.getCredits(this.id).then(data=>this.credit= data.cast);
    this._TMDBApiService.getSimilars(this.id).then(data=>this.similarMovies = data.results);

    setTimeout(()=>{
      console.log(this.detail)
    },4000);
    console.log(this.detail)

  }

}
