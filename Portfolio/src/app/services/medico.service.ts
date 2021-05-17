import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico.model';


const baseUrl = 'http://localhost:8082/api/medicos';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Medico[]> {
    return this.http.get<Medico[]>(baseUrl);
  }

  get(id: any): Observable<Medico> {
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

  findByNome(nome: any): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${baseUrl}?nome=${nome}`);
  }

  findByEspecialidade(especialidade: any): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${baseUrl}/especialidade?especialidade=${especialidade}`);
  }
}
