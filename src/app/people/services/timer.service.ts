import { Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {takeUntil,takeWhile, timer, map, Subject,tap, filter, Observable, skipWhile, interval} from 'rxjs';

export type milliseconds = number;
@Injectable({
  providedIn: 'any'
})
export class TimerService {
  private readonly interval = 5000;
  private readonly tick = 100;
  private currentTime = 0;
  private timer: Observable<number> = new Observable();
  private paused = false;

  start(): Observable<number> {
    this.currentTime = 0;
    this.paused = false;
	  this.timer = this.createTimer();
    return this.timer;
  }

  pause() {
	  this.paused = true;
  }

  resume() {
	  this.paused = false;
  }

  reset() {
    this.currentTime = 0;
  }

  private createTimer(): Observable<number> {
    return interval(this.tick).pipe(
      filter(() => !this.paused),
      tap(() => this.currentTime += this.tick),
      map(() => this.currentTime),
      filter((v: number) => !(v % this.interval)),
      takeUntilDestroyed()
    );
  }
}