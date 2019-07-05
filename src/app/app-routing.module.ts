import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TVshowComponent } from './components/tvshow/tvshow.component';

const routes: Routes = [
    {path: 'Actors', component: ActorsComponent},
    {path: 'Movies', component: MoviesComponent},
    {path: 'ActorDetails', component: DetailActorComponent},
    {path: 'MovieDetails', component: DetailMovieComponent},
    {path: 'TVshows', component: TVshowComponent},
    {path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
