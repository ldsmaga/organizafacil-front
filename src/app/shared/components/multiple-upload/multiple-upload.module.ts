import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultipleUploadComponent } from './multiple-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material-module';
import { MultipleUploadItemComponent } from './multiple-upload-item/multiple-upload-item.component';
import { DragDropDirective } from './drag-drop.directive';



@NgModule({
  declarations: [MultipleUploadComponent,MultipleUploadItemComponent,DragDropDirective],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule
  ],
  exports: [MultipleUploadComponent]
})
export class MultipleUploadModule { }
