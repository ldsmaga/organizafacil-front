import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TarefasService } from '../tarefas.service';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {


  tarefaForm: FormGroup;
  constructor(
    private tarefasService: TarefasService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarTarefaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {


      this.tarefaForm = this.formBuilder.group({
        conteudo_tarefa: ['']
      })

    }

    alterarTarefa(){
      const conteudo = this.tarefaForm.get("conteudo_tarefa").value;
      
      let json =  `{
        "idTarefa":"`
       + this.data.idTarefa + `", 
       "status_tarefa":"ativo",
       "conteudo_tarefa":"`+ conteudo + `"
      }`
      alert("Alterado com sucesso!");
      this.tarefasService.editar(json);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
