import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ButtonDownloadService {
readonly API = environment.API; 
  constructor(private http:HttpClient) { }

  downloadPdf(url:string){
    return this.http.get(url,{
      responseType: 'blob'
    }).pipe(
      take(1)
    )
  }
}