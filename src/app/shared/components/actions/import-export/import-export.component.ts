import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ImportExport } from './ImportExport';
import { ImportExportService } from './import-export.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionsSharedService } from 'src/app/shared/services/actions-shared.service';
import { ErrorAlertComponent } from '../../alert/error-alert/error-alert.component';


@Component({
  selector: 'app-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.css']
})
export class ImportExportComponent implements OnInit {

  success: boolean = false;
  showSpinner: boolean = false;
  importUrl: string;
  exportUrl: string;
  entity:string;
  form: FormGroup;
  private file: File | null = null;
  uploadResponse = { status: '', message: '', filePath: '' };
  error = null;
  importFlag:boolean = false;

 
  constructor(
    public dialogRef: MatDialogRef<ImportExportComponent>,
    private importExportService: ImportExportService,
    private formBuilder: FormBuilder,
    private actionsSharedService: ActionsSharedService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data: ImportExport) {
    this.importUrl = data.urlImport;
    this.exportUrl = data.urlExport;
    this.entity = data.entity
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      file: ['', Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = <File>event.target.files[0];
      this.form.get('file').setValue(this.file);
    }
  }

  import() {
    this.success = false;
    this.showSpinner = true;
    this.importFlag = true;
    this.error = null;
    this.uploadResponse = null;
    
    let formData = new FormData();
    formData.append("file",this.form.get("file").value);
    
    this.importExportService.import(this.importUrl,formData).subscribe(
      (res) => {
        this.uploadResponse = res;
        
      },
      (err) => {
        this.error = err.error
        this.showSpinner = false;
      },
      () => {
        this.success = !this.success
        this.actionsSharedService.updateList("true");
        this.actionsSharedService.updateList("false");
      },
    );
  }

  export() {
    this.success = false;
    this.showSpinner = true;
    this.error = null;
    this.uploadResponse = null;
    
    let formData = new FormData();
    formData.append("file",this.form.get("file").value);
    
    this.importExportService.export(this.exportUrl)
      .subscribe(response => {
        this.downLoadFile(response, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",`${this.entity}.xlsx`);
        this.success = !this.success
      }, (err) => {
        this.error = err.error
        this.showSpinner = false;
        this.dialog.open(ErrorAlertComponent, {
          width: '350px',
          data: {name: "Não foi possível exportar o arquivo. Tente novamente!"}
        });
      },);
  }

  downLoadFile(data: any, type: string,filename) {
    let blob = new Blob([data], { type: type});
    let url = window.URL.createObjectURL(blob);
    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    if (filename)
        downloadLink.setAttribute('download', filename);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}


