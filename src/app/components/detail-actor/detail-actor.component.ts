import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBApiServiceService } from '../../services/tmdbapi-service.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailActorComponent implements OnInit {
  public id;
  public detail = []
  public p:number =1
  public credit = []
  public imgURL = 'https://image.tmdb.org/t/p/w500'
  constructor(private spinner: NgxSpinnerService,private _TMDBApiService:TMDBApiServiceService,private _Activatedroute:ActivatedRoute) {
      this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      this.loadData();
     });
   }

  ngOnInit() {
  }

  loadData(){
    
    
  
  this._TMDBApiService.getDetailsActor(this.id).then(data=>this.detail = data);
  this._TMDBApiService.getFromTMBDCombinedCredits(this.id).then(data=>this.credit = data.cast);

  this.spinner.show();
  setTimeout(() => {
    this.spinner.hide();
  }, 1000);

  }

  function(gener){
    
    if(gener===1){
      return 'Female'
    }else{
      return 'Male'
    }
  }
  question(media){
    if(media == "tv")
      return true
    else
      return false
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
}
