import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MultipleUploadService } from './multiple-upload.service';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-multiple-upload',
  templateUrl: './multiple-upload.component.html',
  styleUrls: ['./multiple-upload.component.css']
})
export class MultipleUploadComponent implements OnInit {

  @Input() url: string

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;
  files = [];
  constructor(private uploadService: MultipleUploadService) { }


  ngOnInit() {
  }

  uploadFileDragAndDrop(event) {
    this.files = [];
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      // const file = fileUpload.files[index];
      this.files.push({ data: element, inProgress: false, progress: 0, done: "loading" });
      this.uploadFile(this.files[index]);
    }
    
  }

  private uploadFiles() {
    this.fileUpload.nativeElement.value = '';
    this.files.forEach(file => {
      console.log(file);
      this.uploadFile(file);
    });
  }

  onClick() {
    this.files = [];
    const fileUpload = this.fileUpload.nativeElement;
    fileUpload.onchange = () => {
      for (let index = 0; index < fileUpload.files.length; index++) {
        const file = fileUpload.files[index];
        this.files.push({ data: file, inProgress: false, progress: 0, done: "loading",error: "" });
      }
      this.uploadFiles();
    };
    fileUpload.click();
  }

  uploadFile(file) {
    const formData = new FormData();
    formData.append('file', file.data);
    file.inProgress = true;
    this.uploadService.upload(this.url, formData).pipe(
      map(event => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            file.progress = Math.round(event.loaded * 100 / event.total);
            break;
          case HttpEventType.Response:
            return event;
        }
      }),
      catchError((error: HttpErrorResponse) => {
        file.inProgress = false;
        file.done = "error"
        file.error = error.error.error;
        return of(`${file.data.name} upload failed.`);
      })).subscribe((event: any) => {
        if (typeof (event) === 'object') {
          file.done = "success"
          // file.done = "error"
        }
      });
  }

}
