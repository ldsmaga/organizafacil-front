import { Component, OnInit } from '@angular/core';
import { NotasModel } from 'src/app/models/notas.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TarefasService } from './tarefas.service';
import { TarefasModel } from 'src/app/models/tarefas.model';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  tarefas: any;
  erro: any;
  tarefaForm: FormGroup;
  constructor(
    private tarefaService: TarefasService,
    private formBuilder: FormBuilder
    ) {
      this.tarefaForm = this.formBuilder.group({
        conteudo_tarefa: ['']
      })
     }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.tarefaService.listar().subscribe(
      (dados: TarefasModel) => {
       this.tarefas = dados;
    },
      (error: any) => {
        this.erro = error;
        console.error("ERROR: ", error);
      }
      );
 }

adicionar(){
 let json = JSON.stringify(this.tarefaForm.getRawValue());
 console.log(json);
 this.tarefaService.adicionar(json);
}

inativar(){
  let json = `{"idAnotacao":"14"}`
  this.tarefaService.inativar(json);
}

editar(){
  let json = `{"idAnotacao":"14", "conteudo_anotacao":"oiz"}`
  this.tarefaService.editar(json);
}

}
