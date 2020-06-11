import { Component, OnInit, Input } from '@angular/core';
import { ButtonDownloadService } from './button-download.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-button-download',
  templateUrl: './button-download.component.html',
  styleUrls: ['./button-download.component.css']
})
export class ButtonDownloadComponent {
  @Input() url: string;
  @Input() nome: string;
  @Input() formato: string;
  @Input() icone: boolean;
  @Input() cor: string;
  @Input() showSpin: boolean;
  @Input() alteraNome: string;
  @Input() filename: string;

  load: boolean = true;
  success: boolean;
  showSpinner: boolean;

  constructor(private buttonDownloadService: ButtonDownloadService) { }

  ngOnInit() {
    console.log(this.url);
  }
  download(event) {
    event.preventDefault();
    this.showSpin = true;
    this.load = false;
    this.success = false
    this.buttonDownloadService.downloadPdf(this.url).subscribe(
      resp => {
        this.downLoadFile(resp, "image/png", this.filename);
        this.success = true; //Fim da animação do Spin para completado
        this.load = true;//Volta o botão de download
        this.showSpin = false;
      });
  }

  downLoadFile(data: any, type: string, filename) {
    let blob = new Blob([data]);
    // let url = window.URL.createObjectURL(blob);
    let downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    if (filename)
      downloadLink.setAttribute('download', filename);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}
