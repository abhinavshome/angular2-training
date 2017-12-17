import { MovieService } from './../../services/movie.service';
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

  constructor(private movieService: MovieService) { 
  }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  selectMovie(movie) {
    this.movieService.selectMovie(movie.id);
    this.selectedMovie = this.movieService.getSelectedMovie();
  }

}
