import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: any;
  erro: any;
  cadastroForm: FormGroup;
  load: boolean = false;

  constructor(
    private cadastroService: CadastroService, 
    private formBuilder: FormBuilder,
    private router: Router
     ) { 
       this.cadastroForm = this.formBuilder.group({
         nome: ['', [Validators.required, Validators.minLength(1)]],
         email: ['', [Validators.required, Validators.minLength(1)]],
         senha: ['', [Validators.required, Validators.minLength(1)]],
         status: ['ativo']
       })
     }

  ngOnInit(): void {
  }

  cadastrar(){
    this.load = true;
    let json = JSON.stringify(this.cadastroForm.getRawValue());
    console.log(json)
    this.cadastroService.adicionar(json);
  }

  cancelar(){
    this.router.navigate(["/"]);
  }

}
