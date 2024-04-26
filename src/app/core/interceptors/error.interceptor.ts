import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { throwError, catchError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        console.error('HTTP error:', err);
      } else {
        console.error('Error occurred:', err);
      }
      return throwError(() => new Error('Error occured. Try again later'));
    })
  );
};
