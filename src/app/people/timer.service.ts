import { Injectable, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {takeUntil,takeWhile, timer, map, Subject,tap, filter, Observable, skipWhile} from 'rxjs';

export type milliseconds = number;
@Injectable({
  providedIn: 'any'
})
export class TimerService {
  private readonly interval = 5000;
  private readonly tick = 100;
  private readonly currentTime = signal(0);
  private _timer: Observable<number> = new Observable();
  private _paused = false;

  start(): Observable<number> {
	  this._timer = this.timer();
    return this._timer;
  }

  pause() {
	  this._paused = true;
  }

  resume() {
	  this._paused = false;
  }

  reset() {
    this.currentTime.set(0);
  }

  private timer() {
    return timer(0, this.tick).pipe(
      filter(() => !this._paused),
      map(() => this.currentTime()),
      tap(() => this.currentTime.update(v => v + this.tick)),
      filter((v: number) => !(v % this.interval)),
      takeUntilDestroyed()
    );
  }
}