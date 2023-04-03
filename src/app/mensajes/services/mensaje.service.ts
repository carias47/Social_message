import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mensaje } from '../interfaces/Mensaje';

@Injectable({
  providedIn: 'root',
})
export class MensajeService {
  mensajeURL = environment.messageUrl;

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Mensaje[]> {
    return this.httpClient.get<Mensaje[]>(`${this.mensajeURL}`);
  }

  public save(producto: Mensaje): Observable<any> {
    return this.httpClient.post<any>(`${this.mensajeURL}`, producto);
  }
}
