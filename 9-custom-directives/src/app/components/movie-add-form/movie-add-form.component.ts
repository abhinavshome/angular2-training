import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/movie';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent implements OnInit {
  newMovie: Movie;
  constructor(
    private movieService: MovieService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newMovie = {
      title: null,
      year: null,
      rating: null,
      thumbnail: null
    };
  }

  addMovie() {
    this.movieService
      .addMovie(this.newMovie)
      .subscribe(res => this.router.navigate(['/movies']));
  }
}
