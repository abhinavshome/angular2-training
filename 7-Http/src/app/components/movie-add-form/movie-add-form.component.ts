import { Movie } from './../../models/index';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent implements OnInit {
  movie: Movie ;
  @Output() movieFormSubmit = new EventEmitter();
  constructor() { }

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
    this.movieFormSubmit.emit(this.movie);
    this.reset();
  }

}
