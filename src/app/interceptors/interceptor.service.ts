import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from '../mensajes/services/token.service';

@Injectable()
export class MensajeInterceptor implements HttpInterceptor {
  constructor(private tokenService: TokenService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
      tokenUser: 'ABC12395445KDFS',
    });
    const reqClone = req.clone({
      headers,
    });
    return next.handle(reqClone).pipe(catchError(this.manejarError));
  }
  manejarError(error: HttpErrorResponse) {
    console.log('sucedió un error');
    console.log('Registrado en el log file');
    console.log(error);
    return throwError('Error personalizaod');
  }
}
