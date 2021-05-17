import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidade } from '../models/especialidade.model';

const baseUrl = 'http://localhost:8082/api/especialidades';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(baseUrl);
  }

  get(id: any): Observable<Especialidade> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByNome(nome: any): Observable<Especialidade[]> {
    return this.http.get<Especialidade[]>(`${baseUrl}?nome=${nome}`);
  }

}
