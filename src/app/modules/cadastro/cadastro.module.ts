import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material-module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { SpinnerAngularmaterialModule } from 'src/app/shared/components/spinner-angularmaterial/spinner-angularmaterial.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AlertModule,
    SpinnerAngularmaterialModule,
    RouterModule,
    HttpClientModule
  ]
})
export class CadastroModule { }
