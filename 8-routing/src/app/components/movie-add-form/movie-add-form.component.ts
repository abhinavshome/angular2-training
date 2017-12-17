import { Router } from '@angular/router';
import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/index';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent implements OnInit {
  movie: Movie;
  @Output() movieFormSubmit = new EventEmitter();
  constructor(private movieService: MovieService, private router: Router) { }

  reset() {
    this.movie = {
      title: null,
      rating: null,
      thumbnail: null,
      year: null
    };
  }

  ngOnInit() {
    this.reset();
  }

  onSubmit() {
    this.movieService
      .addMovie(this.movie)
      .subscribe(res => this.router.navigate(['/movies']));
  }

}
