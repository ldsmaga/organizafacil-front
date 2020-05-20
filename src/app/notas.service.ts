import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  private notasUrl = 'http://localhost:9191/notas'

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.notasUrl}`)

  }
}
