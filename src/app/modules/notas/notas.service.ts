import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../../core/token/token.service';
import { Observable } from 'rxjs';
import { NotasModel } from '../../models/notas.model';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  private notasUrl = 'http://localhost:9191/notas'

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listar():Observable<NotasModel>{ 
    return this.http.get<NotasModel>(`${this.notasUrl}`);
  }

  adicionar(json){
    return this.http.post(`${this.notasUrl}/adicionar`, json).subscribe(
      resultado => {
        console.log(resultado) 
  window.location.reload();
      })
  }

  inativar(json){
    return this.http.put(`${this.notasUrl}/inativar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  arquivar(json){
    return this.http.put(`${this.notasUrl}/arquivar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  desarquivar(json){
    return this.http.put(`${this.notasUrl}/desarquivar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  editar(json){
    return this.http.put(`${this.notasUrl}/editar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }




}
