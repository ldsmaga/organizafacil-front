import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API = environment.API;
  
  constructor(
    private http: HttpClient,
    private userService: UserService 
  ) { }

  authenticate(email:string,senha:string){
    
    return this.http
      .post(`${this.API}/login`,
        { email, senha },
        { observe: 'response' }
      )
      
      .pipe(tap(res => {
          const authToken: any = res.headers.get('Authorization');
          // console.log(authToken);
          this.userService.setToken(authToken);
      }))
  }
}
