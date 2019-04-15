import { Component, OnInit } from '@angular/core';

import { MovieService } from '../core/services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StateService } from '@app/core/services/state.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  details: any = {};
  trailers: any = [];

  constructor(
    private movieService: MovieService,
    private router: Router,
    private state: StateService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.state.setPage('details');
    this.fetchDetails();
    this.fetchTrailers();
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private fetchDetails() {
    this.movieService.getDetails(this.activatedRoute.snapshot.params.id).subscribe((details: any) => {
      console.log(details);
      this.details = details;
    });
  }

  private fetchTrailers() {
    this.movieService.getTrailers(this.activatedRoute.snapshot.params.id).subscribe((trailers: any) => {
      console.log(trailers);
      this.trailers = trailers.results;
    });
  }
}
