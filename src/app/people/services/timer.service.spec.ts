import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TimerService } from './timer.service';
import { Observable } from 'rxjs';

describe('TimerService', () => {
  let service: TimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimerService],
    });
    service = TestBed.inject(TimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start the timer', fakeAsync(() => {
    TestBed.runInInjectionContext(() => {
      const timer$ = service.start();
      expect(timer$ instanceof Observable).toBe(true);

      const subscription = timer$.subscribe((time) => {
        expect(time).toEqual(5000);
        subscription.unsubscribe();
      });

      tick(5000);
    });
  }));

  it('should pause the timer', fakeAsync(() => {
    TestBed.runInInjectionContext(() => {
      let counter = 0;
      const subscription = service.start().subscribe(() => {
        counter += 1;
        subscription.unsubscribe();
      });

      tick(1000);
      service.pause();
      tick(12000);

      expect(counter).toEqual(0);
      subscription.unsubscribe();
    });
  }));

  it('should resume the timer', fakeAsync(() => {
    TestBed.runInInjectionContext(() => {
      let counter = 0;
      const subscription = service.start().subscribe(() => {
        counter += 1;
        subscription.unsubscribe();
      });

      tick(1000);
      service.pause();
      tick(5000);
      service.resume();
      tick(4000);

      expect(counter).toEqual(1);
    });
  }));

  it('should reset the timer', fakeAsync(() => {
    TestBed.runInInjectionContext(() => {
      let lastValue = 0;
      const subscription = service.start().subscribe((time: number) => {
        lastValue = time;
      });

      tick(10000);
      expect(lastValue).toEqual(10000);
      service.reset();
      tick(5000);
      expect(lastValue).toEqual(5000);

      subscription.unsubscribe();
    });
  }));
});
