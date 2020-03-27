import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    req = req.clone({
      headers: req.headers.set('x-rapidapi-host', 'covid-19-data.p.rapidapi.com')
    });
    req = req.clone({
      headers: req.headers.set('x-rapidapi-key', '56fe406eacmsh9dcc7ea73142b62p12d551jsn1efdb0391da9')
    });

    return next.handle(req);
  }
}

export const HttpConfigInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HttpConfigInterceptor,
  multi: true
};

