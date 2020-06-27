import { Component, OnInit } from '@angular/core';
import { DadosCadastraisService } from './dados-cadastrais.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/core/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dados-cadastrais',
  templateUrl: './dados-cadastrais.component.html',
  styleUrls: ['./dados-cadastrais.component.css']
})
export class DadosCadastraisComponent implements OnInit {
  usuario: any;
  erro: any;
  dadosForm: FormGroup;
  constructor(
    private dadosService: DadosCadastraisService, 
    private formBuilder: FormBuilder) { 
      this.dadosForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: ['']
    })}

  ngOnInit(): void {
    this.listar();
      }

      listar(){
        this.dadosService.listar().subscribe(
          usuario => {
           this.usuario = usuario;
        },
          (error: any) => {
            this.erro = error;
            console.error("ERROR: ", error);
          }
          );
     }

     inativar(){
      let confirmacao = confirm("Deseja realmente excluir a conta? Esta ação não tem volta.");
      if (confirmacao) {
    this.dadosService.inativar();
    }
     }


     alterarDados(id){
      const nome = this.dadosForm.get("nome").value;
      const email = this.dadosForm.get("email").value;
      const senha = this.dadosForm.get("senha").value;
      
      let json =  `{
        "idUsuario":"`+ id + `",
       "nome":"`+ nome + `",
       "email":"`+ email + `",
       "senha":"`+ senha + `"
      }`
      this.dadosService.editar(json);
    }
    
}
