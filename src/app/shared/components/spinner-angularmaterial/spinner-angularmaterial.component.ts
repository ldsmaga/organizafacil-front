import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-angularmaterial',
  templateUrl: './spinner-angularmaterial.component.html',
  styleUrls: ['./spinner-angularmaterial.component.css']
})
export class SpinnerAngularmaterialComponent {
  color = 'accent';
  mode = 'indeterminate';
  diameter = 22;
  constructor() { }

}
