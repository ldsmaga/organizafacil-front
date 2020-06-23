import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotasService } from '../notas.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {


  notaForm: FormGroup;
  constructor(
    private notaService: NotasService,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditarNotaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {


      this.notaForm = this.formBuilder.group({
        conteudo_anotacao: ['']
      })

    }

    alterarNota(){
      const conteudo = this.notaForm.get("conteudo_anotacao").value;
      
      let json =  `{
        "idAnotacao":"`
       + this.data.idAnotacao + `", 
       "status_anotacao":"ativo",
       "conteudo_anotacao":"`+ conteudo + `"
      }`
      alert("Alterado com sucesso!");
      this.notaService.editar(json);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    console.log(this.data)
  }

}
