import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { SelectedMovieComponent } from './components/selected-movie/selected-movie.component';
import { MovieAddFormComponent } from './components/movie-add-form/movie-add-form.component';
import { TitlecasePipe } from './pipes/titlecase.pipe';
import { RoutingModule } from './routing.module';
import { AboutComponent } from './components/about/about.component';
import { PlayMovieComponent } from './components/play-movie/play-movie.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieListItemComponent,
    SelectedMovieComponent,
    MovieAddFormComponent,
    TitlecasePipe,
    AboutComponent,
    PlayMovieComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
