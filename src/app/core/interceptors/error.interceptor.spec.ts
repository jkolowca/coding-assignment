import { HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { errorInterceptor } from './error.interceptor';
import { Observable, catchError, throwError } from 'rxjs';

describe('ErrorInterceptor', () => {
  const requestMock = new HttpRequest('GET', '/test');

  beforeEach(() => {
    spyOn(console, 'error').and.callThrough();
  });

  it('should handle HTTP response without error', (done: DoneFn) => {
    const next: any = () => new Observable((s) => s.next());

    errorInterceptor(requestMock, next).subscribe(() => {
      expect(console.error).not.toHaveBeenCalled();
      done();
    });
  });

  it('should handle non-HTTP error response', (done: DoneFn) => {
    const error = 'Error';
    const next: any = () => throwError(() => error);

    errorInterceptor(requestMock, next)
      .pipe(
        catchError((e: any) => {
          return new Observable((s) => s.next());
        })
      )
      .subscribe(() => {
        expect(console.error).toHaveBeenCalledWith('Error occurred:', 'Error');
        done();
      });
  });

  it('should handle HTTP error response', (done: DoneFn) => {
    const error = new HttpErrorResponse({});
    const next: any = () => throwError(() => error);

    errorInterceptor(requestMock, next)
      .pipe(
        catchError((e: any) => {
          return new Observable((s) => s.next());
        })
      )
      .subscribe(() => {
        expect(console.error).toHaveBeenCalledWith(
          'HTTP error:',
          jasmine.any(Object)
        );
        done();
      });
  });
});
