import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MultipleUploadService {

  constructor(private httpClient: HttpClient) { }

  upload(url:string,formData){
    return this.httpClient.post<any>(url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
