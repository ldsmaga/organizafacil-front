import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from 'src/app/core/token/token.service';
import { Observable } from 'rxjs';
import { TarefasModel } from 'src/app/models/tarefas.model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private tarefasUrl = 'http://localhost:9191/tarefas'
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  listar():Observable<any>{
    return this.http.get<TarefasModel[]>(`${this.tarefasUrl}`)
  }

  adicionar(json){
    return this.http.post(`${this.tarefasUrl}/adicionar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  inativar(json){
    return this.http.put(`${this.tarefasUrl}/inativar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  arquivar(json){
    return this.http.put(`${this.tarefasUrl}/arquivar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  desarquivar(json){
    return this.http.put(`${this.tarefasUrl}/desarquivar`, json).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  editar(json){
    return this.http.put(`${this.tarefasUrl}/editar`, json).subscribe(
      resultado => {
        console.log(resultado)
      })
  }
}
