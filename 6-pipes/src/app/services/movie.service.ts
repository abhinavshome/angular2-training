import { Movie } from './../models/index';
import { DUMMY_MOVIES } from './dummy-movies';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  private movies = DUMMY_MOVIES;
  private selectedMovie: Movie;

  constructor() { 

  }

  getMovies() {
    return this.movies;
  }

  getSelectedMovie() {
    return this.selectedMovie;
  }

  selectMovie(movieId) {
    this.selectedMovie = this.movies.find( m => m.id === movieId);
  }

  addMovie(movie) {
    movie.id = this.movies.length + 1;
    this.movies.push(Object.assign({}, movie));
  }
}
