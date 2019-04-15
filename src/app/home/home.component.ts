import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { StateService } from '@app/core/services/state.service';
import { MovieService } from '../core/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  movies: any[] = [];
  page = 1;
  imageSize: string;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private state: StateService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.fetchMovies();
    this.state.setPage('movies');

    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.imageSize = 'w342';
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.imageSize = 'w342';
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.imageSize = 'w342';
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.imageSize = 'w185';
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.imageSize = 'w342';
        }
      });
  }

  onScroll(event: any) {
    if (event.isReachingBottom && !this.isLoading) {
      this.page++;
      this.fetchMovies();
    }
  }

  private fetchMovies() {
    this.isLoading = true;
    this.movieService
      .getMovies(this.page, this.router.url.split('/')[1])
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((movies: any) => {
        console.log(movies.results);
        this.movies = this.movies.concat(movies.results);
      });
  }
}
