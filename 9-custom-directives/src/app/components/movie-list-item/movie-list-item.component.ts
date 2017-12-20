import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent implements OnInit {
  @Input() movie;
  @Output() movieSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectMovie() {
    this.movieSelect.emit(this.movie);
  }

}
