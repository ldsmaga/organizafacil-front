import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonGoBackComponent } from './button-go-back.component';
import { MaterialModule } from 'src/app/material-module';



@NgModule({
  declarations: [ButtonGoBackComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ButtonGoBackComponent]
})
export class ButtonGoBackModule { }
