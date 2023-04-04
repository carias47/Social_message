import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../mensajes/services/token.service';

@Injectable()
export class MensajeInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let intReq = request;
    const token = this.tokenService.getToken();

    if (token) {
      intReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
    }
    return next.handle(intReq);
  }
}

export const interceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: MensajeInterceptor, multi: true },
];
