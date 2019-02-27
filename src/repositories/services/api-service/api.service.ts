import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchRepositories(searchString: string = null) {
    const url = `https://api.github.com/search/repositories?q=${searchString}`;
    return this.http.get(url).pipe(
      map(res => res),
      catchError(err => err)
    );

  }
}
