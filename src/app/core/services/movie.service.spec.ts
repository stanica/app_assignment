import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoreModule, HttpCacheService } from '@app/core';
import { MovieService } from './movie.service';

describe('MovieService', () => {
  let movieService: MovieService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [HttpCacheService, MovieService]
    });
  }));

  beforeEach(inject(
    [HttpCacheService, MovieService, HttpTestingController],
    (htttpCacheService: HttpCacheService, _movieService: MovieService, _httpMock: HttpTestingController) => {
      movieService = _movieService;
      httpMock = _httpMock;

      htttpCacheService.cleanCache();
    }
  ));

  afterEach(() => {
    httpMock.verify();
  });

  describe('getMovies', () => {
    it('should return a list of movies', () => {
      // Arrange
      const mockMovies = { results: [{ title: 'Random Movie 1' }, { title: 'Random Movie 2' }] };

      // Act
      const moviesSubscription = movieService.getMovies(1, 'popular');

      // Assert
      moviesSubscription.subscribe((movies: any) => {
        expect(movies).toEqual(movies);
      });
      httpMock.expectOne({}).flush(mockMovies);
    });

    it('should return a string in case of error', () => {
      // Act
      const moviesSubscription = movieService.getMovies(1, 'popular');

      // Assert
      moviesSubscription.subscribe((movies: any) => {
        expect(typeof movies).toEqual('string');
        expect(movies).toContain('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 500,
        statusText: 'error'
      });
    });
  });
});
