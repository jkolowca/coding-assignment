import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  }
}

interface Response {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  }
}

@Injectable({
  providedIn: 'any'
})
export class RandomUserService {
  private readonly url = "https://randomuser.me/api";
  user = signal<User | undefined>(undefined);

  constructor(private http: HttpClient) { }

  fetchUser() {
    this.user.set(undefined);
    this.http.get<Response>(this.url, {params: {inc: ["picture,name"], results: 1}}).pipe(
      catchError((error) => {
        console.error('API error', error);
        return throwError(() => new Error('Error occured. Try again later'));
      })
    ).subscribe((response) => {
      this.user.set(response.results && response.results[0])
    });
  }

}

