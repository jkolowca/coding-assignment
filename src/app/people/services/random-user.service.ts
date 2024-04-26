import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { RandomUser, RandomUserResponse } from '../interfaces/random-user-interface';

@Injectable({
  providedIn: 'any'
})
export class RandomUserService {
  private readonly url = "https://randomuser.me/api";
  readonly randomUser = signal<RandomUser | undefined>(undefined);

  constructor(private readonly http: HttpClient) {
  }

  fetchUser() {
    this.randomUser.set(undefined);
    this.http.get<RandomUserResponse>(this.url, {params: {inc: ["picture, name"], results: 1}})
      .subscribe((response) => {
        this.randomUser.set(response.results && response.results[0]);
      });
  }
}

