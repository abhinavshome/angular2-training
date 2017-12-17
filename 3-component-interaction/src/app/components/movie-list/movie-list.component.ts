import { DUMMY_MOVIES } from './dummy-movies';
import { Movie } from './../../models/';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;

  constructor() { 
  }

  ngOnInit() {
    this.movies = DUMMY_MOVIES;
  }

  selectMovie(movie) {
    this.selectedMovie = movie;
  }

}
