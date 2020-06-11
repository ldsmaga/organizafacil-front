import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerAngularmaterialComponent } from './spinner-angularmaterial.component';
import { MaterialModule } from 'src/app/material-module';

@NgModule({
  declarations: [SpinnerAngularmaterialComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SpinnerAngularmaterialComponent,
  ]
})
export class SpinnerAngularmaterialModule { }
