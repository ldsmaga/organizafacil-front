import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service'
import { DadosCadastraisService } from '../dados-cadastrais/dados-cadastrais.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public usuario: any;
  public erro: any;
  public hoje: Date = new Date();
  constructor(
   private userService: UserService,
   private dadosService: DadosCadastraisService
   ) { }

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

}
