import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorAlertComponent } from './error-alert/error-alert.component';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  declarations: [ErrorAlertComponent,ConfirmAlertComponent,SuccessAlertComponent],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports:[ErrorAlertComponent,ConfirmAlertComponent],
  entryComponents: [ErrorAlertComponent,ConfirmAlertComponent,SuccessAlertComponent]
})
export class AlertModule { }
