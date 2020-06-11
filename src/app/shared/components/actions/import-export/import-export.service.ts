import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { take, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImportExportService {



  constructor(private http: HttpClient) { }

  import(url, form) {
    return this.http.post<any>(environment.API + url, form, {
      reportProgress: true,
      observe: 'events'
    }).pipe(map((event) => {

      switch (event.type) {
        case HttpEventType.UploadProgress:
          const progress = Math.round(100 * event.loaded / event.total);
          return { status: 'progress', message: progress };

        case HttpEventType.Response:
          return event.body;
        default:
          return `Unhandled event: ${event.type}`;
      }
    })
    );
  }


  export(url) {
    return this.http.get(environment.API + url, {
      responseType: 'arraybuffer'
    });
  }


}
