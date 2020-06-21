import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/core/user/user.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nome: any;
  public hoje: Date = new Date();
  constructor(
   private userService: UserService
   ) { }

  ngOnInit(): void {
    this.teste();
  }

  teste(){
    this.nome = this.userService.getUsername();
  }

}
