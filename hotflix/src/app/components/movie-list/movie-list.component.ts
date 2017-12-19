import { MovieService } from './../../services/movie.service';
import { DUMMY_MOVIES } from './dummy-movies';
import { Movie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  selectedMovie: Movie;
  num = 123.23236623;
  today = new Date();
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe( res => this.movies = res.json() )
  }

  selectMovie(movie) {
    this.movieService.selectMovie(movie);
    this.selectedMovie = this.movieService.getSelectedMovie();
  }

  addMovie(movie) {
    this.movieService.addMovie(movie).subscribe( res => this.movies.push(res.json()));
  }
}
