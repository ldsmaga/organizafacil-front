import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/modules/notas/notas.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NotasModel } from 'src/app/models/notas.model';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas: any;
  erro: any;
  notaForm: FormGroup
  constructor(
    private notaService: NotasService,
    private formBuilder: FormBuilder
    ) {
      
    this.listar();
      this.notaForm = this.formBuilder.group({
        conteudo_anotacao: ['']
      })

     }

  ngOnInit(): void {
  }

  listar(){
     this.notaService.listar().subscribe(
       (dados: NotasModel) => {
        this.notas = dados;
     },
       (error: any) => {
         this.erro = error;
         console.error("ERROR: ", error);
       }
       );
  }

adicionar(){
  let json = JSON.stringify(this.notaForm.getRawValue());
  console.log(json);
  this.notaService.adicionar(json);
}

inativar(){
  let json = `{"idAnotacao":"14"}`
  this.notaService.inativar(json);
}

editar(){
  let json = `{"idAnotacao":"14", "conteudo_anotacao":"oiz"}`
  this.notaService.editar(json);
}

}
