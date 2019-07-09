import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';"styles.css"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TVshowComponent } from './components/tvshow/tvshow.component';
import { OwlModule } from 'ngx-owl-carousel';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailTVComponent } from './components/detail-tv/detail-tv.component';
import { BarRatingModule } from 'ngx-bar-rating'
import { MzButtonModule } from 'ngx-materialize'


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ActorsComponent,
    DetailActorComponent,
    DetailMovieComponent,
    MainPageComponent,
    TVshowComponent,
    DetailTVComponent
  ],
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MzButtonModule,
    HttpClientModule,
    OwlModule,
    NgxPaginationModule,
    BarRatingModule,
    NgbModule,
    AngularFontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
