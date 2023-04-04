import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginUsuarioDto } from '../interfaces/login-usuario.dto';
import { Observable } from 'rxjs';
import { nuevoUsuarioDto } from '../interfaces/nuevo-usuario.dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = environment.authURL;
  constructor(private httpClient: HttpClient) {}

  login(dto: LoginUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'login', dto);
  }
  registro(dto: nuevoUsuarioDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', dto);
  }
}
