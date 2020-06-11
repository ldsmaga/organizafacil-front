import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


export interface DialogDataAction {
  name: string,
  warn: string;
  action: string;
}

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
export class ConfirmAlertComponent {

  @Output() onSuggest: EventEmitter<string> = new EventEmitter();
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmAlertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataAction) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onActionClick(): void{
    this.dialogRef.close("excluir");
  }

}
