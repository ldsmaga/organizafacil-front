import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/notas.service';


@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {


  notas: Array<any>;

  constructor(
    private notaService: NotasService
    ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.notaService.listar().subscribe(dados => this.notas = dados);
  }



}
