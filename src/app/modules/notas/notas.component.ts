import { Component, OnInit, Inject, ViewChild, ElementRef, Output, Input } from '@angular/core';
import { NotasService } from 'src/app/modules/notas/notas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditarNotaComponent } from '../notas/editar-nota/editar-nota.component'

import { NotasModel } from 'src/app/models/notas.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  notas: NotasModel;
  erro: any;
  editarNota: boolean = false;
  notaForm: FormGroup;
  

  constructor(
    private notaService: NotasService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
    )
    
    {
      
    
      this.notaForm = this.formBuilder.group({
        status_anotacao: ['ativo'],
        conteudo_anotacao: ['']
      })

     }


  ngOnInit(): void {
this.listar();
  }

  listar(){
     this.notaService.listar().subscribe(
       notas => {
        this.notas = notas;
     },
       (error: any) => {
         this.erro = error;
         console.error("ERROR: ", error);
       }
       );
  }

adicionar(){
  let json = JSON.stringify(this.notaForm.getRawValue());
  this.notaService.adicionar(json);
}

inativar(nota){
  let confirmacao = confirm("Deseja realmente excluir");
  if (confirmacao) {
  let json = `{"idAnotacao":"` + nota + `"}`
this.notaService.inativar(json);
}
}

arquivar(nota){
  let confirmacao = confirm("Arquivar nota?");
  if (confirmacao) {
  let json = `{"idAnotacao":"` + nota + `"}`
this.notaService.arquivar(json);
}
}

desarquivar(nota){
  let confirmacao = confirm("Desarquivar nota?");
  if (confirmacao) {
  let json = `{"idAnotacao":"` + nota + `"}`
this.notaService.desarquivar(json);
}
}

openDialog(idNota){
  
  const dialogRef = this.dialog.open(EditarNotaComponent, {
    width: '800px',
    data: {
      idAnotacao: idNota
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}


}
