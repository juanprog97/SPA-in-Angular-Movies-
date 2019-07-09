import { Component, OnInit,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailMovieComponent implements OnInit {
  public id;
  constructor(private _Activatedroute:ActivatedRoute) { }


  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id) 
  });
  }

}
