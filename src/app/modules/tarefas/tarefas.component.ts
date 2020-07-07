import { Component, OnInit } from '@angular/core';
import { NotasModel } from 'src/app/models/notas.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TarefasService } from './tarefas.service';
import { TarefasModel } from 'src/app/models/tarefas.model';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {
  finalizado = true;
  tarefas: any;
  erro: any;
  tarefaForm: FormGroup;
  constructor(
    private tarefaService: TarefasService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
    ) {
      this.tarefaForm = this.formBuilder.group({
        status_tarefa: ['ativo'],
        conteudo_tarefa: ['', [Validators.required, Validators.minLength(1)]]
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

inativar(tarefa){
  let confirmacao = confirm("Deseja realmente excluir?");
  if (confirmacao) {
  let json = `{"idTarefa":"` + tarefa + `"}`
this.tarefaService.inativar(json);
}
}

openDialog(idTarefa, conteudo_tarefa){
  
  const dialogRef = this.dialog.open(EditarTarefaComponent, {
    width: '800px',
    data: {
      idTarefa: idTarefa,
      conteudo_tarefa: conteudo_tarefa
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}



editar(){
  let json = `{"idAnotacao":"14", "conteudo_anotacao":"oiz"}`
  this.tarefaService.editar(json);
}

arquivar(tarefa){
  let json = `{"idTarefa":"` + tarefa + `"}`
this.tarefaService.arquivar(json);
}

desarquivar(tarefa){
  let json = `{"idTarefa":"` + tarefa + `"}`
this.tarefaService.desarquivar(json);
}

}
