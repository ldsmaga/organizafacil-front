import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class DadosCadastraisService {
  private dadosUrl = 'http://localhost:9191/dadosCadastrais'
  private inativarUsuario = 'http://localhost:9191/removerUsuario'
  private editarUsuario = 'http://localhost:9191/editarUsuario'

  constructor(private http: HttpClient, private router: Router, private userService: UserService) { }

  listar():Observable<UsuarioModel>{ 
    return this.http.get<UsuarioModel>(`${this.dadosUrl}`);
  }

  remover(){
    return this.http.delete(`${this.inativarUsuario}`).subscribe(
      resultado => {
        console.log(resultado)
        this.userService.logout();
        alert("Conta excluída!");
        this.router.navigate(['/']);
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
