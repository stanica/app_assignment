import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';

const apiKey = environment.apiKey;

const routes = {
  // tslint:disable-next-line: max-line-length
  popular: (page: number) => `/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`,
  top: (page: number) => `/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`,
  details: (id: number) => `/3/movie/${id}?api_key=${apiKey}&language=en-US`,
  trailers: (id: number) => `/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
};

@Injectable()
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  getMovies(page: number, route: string): Observable<string> {
    if (typeof routes[route] !== 'function') {
      route = 'popular';
    }
    return this.httpClient
      .cache()
      .get(routes[route](page))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load movies :-('))
      );
  }

  getDetails(id: number): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes['details'](id))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load details :-('))
      );
  }

  getTrailers(id: number): Observable<string> {
    return this.httpClient
      .cache()
      .get(routes['trailers'](id))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load trailers :-('))
      );
  }
}
