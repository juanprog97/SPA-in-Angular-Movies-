import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail-tv.component.html',
  styleUrls: ['./detail-tv.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailTVComponent implements OnInit {
  public id;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id');
      console.log(this.id) 
  });
  }

}
