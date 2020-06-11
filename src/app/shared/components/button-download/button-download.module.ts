import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDownloadComponent } from './button-download.component';
import { MaterialModule } from 'src/app/material-module';
import { SpinnerModule } from '../spinner/spinner.module';
import { SpinnerAngularmaterialModule } from '../spinner-angularmaterial/spinner-angularmaterial.module';



@NgModule({
  declarations: [ButtonDownloadComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SpinnerModule,
    SpinnerAngularmaterialModule
  ],
  exports: [
    ButtonDownloadComponent
  ]
})
export class ButtonDownloadModule { }
