import { Component, OnInit } from '@angular/core';
import { DadosCadastraisService } from './dados-cadastrais.service';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UserService } from 'src/app/core/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/user/user';

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
    private formBuilder: FormBuilder,
    private userService: UserService) { 
      this.dadosForm = this.formBuilder.group({
      nome: [''],
      email: [''],
      senha: ['', [Validators.required, Validators.minLength(1)]],
      confirmacaoSenha: ['', [Validators.required, Validators.minLength(1)]]
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

     remover(){
      let confirmacao = confirm("Atenção! Deseja realmente excluir a conta? Esta ação não tem volta.");
      if (confirmacao) {
    this.dadosService.remover();
    }
     }


     alterarDados(id){
      let nome = this.dadosForm.get("nome").value;
      let email = this.dadosForm.get("email").value;
      let senha = this.dadosForm.get("senha").value;
      let confirmacaoSenha = this.dadosForm.get("confirmacaoSenha").value;

      if(senha != confirmacaoSenha){
        alert("Senhas não coincidem")
        window.location.reload();
      }
      else{

        if(email == ''){
          email = this.userService.getUsername();
        }

        let json =  `{
          "idUsuario":"`+ id + `",
         "nome":"`+ nome + `",
         "email":"`+ email + `",
         "senha":"`+ senha + `"
        }`
        this.dadosService.editar(json);
      }
      
    }
    
}
