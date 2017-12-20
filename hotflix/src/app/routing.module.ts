import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { MovieAddFormComponent } from './components/movie-add-form/movie-add-form.component';
import { AboutComponent } from './components/about/about.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: MovieListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-movie', component: MovieAddFormComponent },
  { path: 'play/:id', component: PlayMovieComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
