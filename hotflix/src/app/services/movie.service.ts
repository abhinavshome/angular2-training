import { DUMMY_MOVIES } from './../components/movie-list/dummy-movies';
import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class MovieService {
    private movies: Movie[];
    private selectedMovie: Movie;
    private url = 'http://localhost:3000/movies';
    constructor(private http: Http) {
        this.movies = DUMMY_MOVIES;
    }

    getMovies() {
        return this.http.get(this.url);
    }

    selectMovie(movie) {
        this.selectedMovie = movie;
    }

    getSelectedMovie() {
        return this.selectedMovie;
    }

    addMovie(movie) {
        let options = {
            headers: new Headers({ 'Content-Type': 'application/json' })
        }
        return this.http.post(this.url, movie, options);
    }
}