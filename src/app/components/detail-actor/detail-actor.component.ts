import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.scss']
})
export class DetailActorComponent implements OnInit {
  public id;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id) 
    });
  }

}
