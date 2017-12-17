import { MovieService } from './../../services/movie.service';
import { Movie } from './../../models/index';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'play-movie',
  templateUrl: './play-movie.component.html',
  styleUrls: ['./play-movie.component.css']
})
export class PlayMovieComponent implements OnInit {
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    let movieId = +this.route.snapshot.paramMap.get('id');
    this
      .movieService
      .getMovie(movieId)
      .subscribe(res => this.movie = res.json())
  }

}
