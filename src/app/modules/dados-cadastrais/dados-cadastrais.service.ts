import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DadosCadastraisService {
  private dadosUrl = 'http://localhost:9191/dadosCadastrais'
  private inativarUsuario = 'http://localhost:9191/removerUsuario'
  private editarUsuario = 'http://localhost:9191/editarUsuario'

  constructor(private http: HttpClient) { }

  listar():Observable<UsuarioModel>{ 
    return this.http.get<UsuarioModel>(`${this.dadosUrl}`);
  }

  inativar(){
    return this.http.delete(`${this.inativarUsuario}`).subscribe(
      resultado => {
        console.log(resultado)
        window.location.reload();
      })
  }

  editar(json){
    return this.http.put(`${this.editarUsuario}`, json).subscribe(
      resultado => {
        console.log(resultado)
        alert("Alterado com sucesso!");
        window.location.reload();
      })
  }

}
