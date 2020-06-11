import { Component,Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportExportComponent } from './import-export/import-export.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent{

  @Input() buttonNew: boolean = true;
  @Input() buttonExportImport = false;
  @Input() newUrl: string;
  @Input() importUrl:string;
  @Input() exportUrl:string;
  @Input() entity:string

  constructor(public dialog: MatDialog) {
  }

  openDialog(){
    const dialogRef = this.dialog.open(ImportExportComponent, {
      width: '500px',
      data: {
        urlImport: this.importUrl,
        urlExport: this.exportUrl,
        entity: this.entity,
      }
    });
  }
}
