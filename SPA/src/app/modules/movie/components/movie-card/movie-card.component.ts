import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie: Movie

  constructor() { }

  ngOnInit(): void {
  }

  public imageErrorHandler(event){
    event.target.src = 'assets/default-movie.png';
  }

}
