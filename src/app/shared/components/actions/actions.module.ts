import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import { MaterialModule } from 'src/app/material-module';
import { RouterModule } from '@angular/router';
import { ImportExportComponent } from './import-export/import-export.component';
import { SpinnerModule } from '../spinner/spinner.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ActionsComponent, ImportExportComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SpinnerModule,
    ReactiveFormsModule
  ],
  exports: [ActionsComponent],
  entryComponents: [ImportExportComponent]
})
export class ActionsModule { }
