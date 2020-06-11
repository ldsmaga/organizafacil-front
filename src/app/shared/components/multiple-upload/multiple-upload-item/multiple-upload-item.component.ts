import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';

@Component({
  selector: 'app-multiple-upload-item',
  templateUrl: './multiple-upload-item.component.html',
  styleUrls: ['./multiple-upload-item.component.css']
})
export class MultipleUploadItemComponent implements OnInit {

  @Input() progress: string
  @Input() name: string
  @Input() done: string
  @Input() error: string
  

  @ViewChild("progress", { static: false }) fileUpload: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
