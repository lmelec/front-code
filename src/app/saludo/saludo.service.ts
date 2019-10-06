import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {
  url = 'http://back:8888/saludo/';
  constructor(private http: HttpClient) { }

  saludar(): Observable<Persona>{
    return this.http.get<Persona>(this.url);
  }

}
