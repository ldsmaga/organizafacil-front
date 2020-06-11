import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MaterialModule } from '../material-module';
import { SpinnerAngularmaterialModule } from '../shared/components/spinner-angularmaterial/spinner-angularmaterial.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule } from '../shared/components/alert/alert.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent],
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
export class LoginModule { }
