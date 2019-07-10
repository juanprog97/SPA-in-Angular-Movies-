import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { ActorsComponent } from './components/actors/actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TVshowComponent } from './components/tvshow/tvshow.component';
import { DetailTVComponent } from './components/detail-tv/detail-tv.component';

const routes: Routes = [
    {path: 'Actors', component: ActorsComponent},
    {path: 'Movies', component: MoviesComponent},
    {path: 'ActorDetails/:id', component: DetailActorComponent},
    {path: 'MovieDetails/:id', component: DetailMovieComponent},
    {path: 'tvDetails/:id', component: DetailTVComponent },
    {path: 'TVshows', component: TVshowComponent},
    {path: '**', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
