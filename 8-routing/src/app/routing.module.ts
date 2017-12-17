import { MovieAddFormComponent } from './components/movie-add-form/movie-add-form.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { AboutComponent } from './components/about/about.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'add-movie', component: MovieAddFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'play/:id', component: PlayMovieComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
