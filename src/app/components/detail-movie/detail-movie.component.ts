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
  public countries = []
  public gen = []
  public imgURL = 'https://image.tmdb.org/t/p/w500'
  constructor(private _TMDBApiService:TMDBApiServiceService,private _Activatedroute:ActivatedRoute) { }


  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id) 
    });
    this._TMDBApiService.getDetails(this.id).then(data=>{
      this.detail = data
      this.countries= data.production_countries
      this.gen = data.genres
    });
      
    this._TMDBApiService.getCredits(this.id).then(data=>this.credit= data.cast);
    this._TMDBApiService.getSimilars(this.id).then(data=>this.similarMovies = data.results);

    setTimeout(()=>{
      console.log(this.countries)
      this.countries.map(function(d){
        let a = document.getElementById("flag")
        let fl = document.createElement("span")
        fl.style.paddingRight = "20px"
        fl.className = `flag-icon flag-icon-${d.iso_3166_1.toLowerCase()}`
        a.appendChild(fl)
      })
      this.gen.map(function(b){
        let a = document.getElementById("gene")
        let fl = document.createElement("div")
        fl.style.margin = "5px"
        fl.className = "alert alert-dark"
        let f2:HTMLElement =document.createElement("h6")
        f2.innerHTML = b.name
        fl.appendChild(f2)
        a.appendChild(fl)
      })
    },2000);

    
  }


}
