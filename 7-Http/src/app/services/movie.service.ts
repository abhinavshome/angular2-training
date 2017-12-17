import { Movie } from './../models/index';
import { DUMMY_MOVIES } from './dummy-movies';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';


@Injectable()
export class MovieService {
  private movies = DUMMY_MOVIES;
  private selectedMovie: Movie;
  private url = 'http://localhost:3000/movies';

  constructor(private http: Http) { }

  getMovies() {
    return this.http.get(this.url);
  }

  getSelectedMovie() {
    return this.selectedMovie;
  }

  selectMovie(movieId) {
    this.selectedMovie = this.movies.find(m => m.id === movieId);
  }

  addMovie(movie) {
    const httpOptions = {
      headers: new Headers({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.url, movie, httpOptions);
  }
}
