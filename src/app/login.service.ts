import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
    ) { }

    public login (username:string, password:string){
      const headers = new HttpHeaders({Authorization: 'Basic'+btoa(username+":"+password)})
      this.http.get("http://localhost:9191/",{headers, responseType:"text" as 'json'});
    }

    public getUsuarios (){
      let username="usuario";
      let password="usuario";
      const headers = new HttpHeaders({Authorization: 'Basic'+btoa("usuario"+":"+"usuario")})
      this.http.get("http://localhost:9191/getUsuarios",{headers});
    }
}
