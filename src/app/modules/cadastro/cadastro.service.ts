import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private cadastroUrl = 'http://localhost:9191/cadastro'
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private http: HttpClient, private router: Router) { }

  adicionar(json){
    return this.http.post(`${this.cadastroUrl}`, json, this.options).subscribe(
      resultado => {
        console.log(resultado) 
        alert("Cadastro concluído!");
        this.router.navigate(['/']);
      },
      err=>{
        alert("Email em uso");
        window.location.reload();
      })
  }

}
