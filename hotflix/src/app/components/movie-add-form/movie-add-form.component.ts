import { Movie } from './../../models/movie';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'movie-add-form',
  templateUrl: './movie-add-form.component.html',
  styleUrls: ['./movie-add-form.component.css']
})
export class MovieAddFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();
  newMovie: Movie;
  constructor() { }

  ngOnInit() {
    this.newMovie = {
      title: null,
      year: null,
      rating: null,
      thumbnail: null
    };
  }

  onSubmit() {
    this.formSubmit.emit(this.newMovie);
  }
}
