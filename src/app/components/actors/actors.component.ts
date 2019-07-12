import { Component, OnInit } from '@angular/core';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  actorPopulars = [];
  public categoryActor = 1; 
  actorSearch = [];
  p: number = 1;
  searching = 0
  public imgURL = 'https://image.tmdb.org/t/p/w500'

  constructor(private spinner: NgxSpinnerService,private _TMDBApiService:TMDBApiServiceService) { }

  ngOnInit() {
    this._TMDBApiService.getPopularActor(1).then(data=>this.actorPopulars= data.results)
    this._TMDBApiService.getPopularActor(2).then(data=>this.actorPopulars= this.actorPopulars.concat(data.results))
    this._TMDBApiService.getPopularActor(3).then(data=>this.actorPopulars= this.actorPopulars.concat(data.results))

    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(()=>{


    },4000);
  }

  actual(){
    switch(this.categoryActor){
        case 1:
        this.searching = 0
          return this.actorPopulars
        case 5:
          if(this.searching ===0 ){
            var query = (document.getElementById('query') as HTMLInputElement).value
            this.search(query)
          }
         
          this.searching =1
          return this.actorSearch
        
    }

  }


  search(name){
    this._TMDBApiService.searchActor(name).then(data=>this.actorSearch = data.results)
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    setTimeout(()=>{
      if(this.actorSearch.length === 0){
        let b = document.getElementById('listAct')
        let c = document.createElement('h3')
        c.innerHTML = "Not Found Actor"
        b.appendChild(c)
      }
      
    },2000);

  }
  myFunction(elem){
    
    if(elem.media_type === "tv"){
      return elem.original_name;
    }
    else{
      return elem.title
    }
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

  selected(option){
    let a = document.getElementById('option')
    let b = document.getElementById('listAct')
    var child = b.lastElementChild;  
        while (child) { 
            b.removeChild(child); 
            child = b.lastElementChild; 
        }
    this.p =1
    switch(option){
      case 1:
        a.innerHTML = "Popular Actors"
        this.categoryActor = 1
        break;
      case 5:
        a.innerHTML = "Actor Search"
        this.searching =0
        this.categoryActor = 5
        break;

    }
  }

}
