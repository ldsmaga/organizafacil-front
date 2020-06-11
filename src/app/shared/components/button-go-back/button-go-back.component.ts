import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.css']
})
export class ButtonGoBackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  goBack(): void {
    window.history.back();;
  }
}