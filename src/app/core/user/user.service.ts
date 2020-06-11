import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, Authority } from './user';
import { TokenService } from '../token/token.service';
import * as jwt_decode from 'jwt-decode';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(null);
  private email: string;
  private roles: Authority[];  

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
      this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.email = user.sub;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  isAdmin(){
    let admin = false;
    this.getUser().pipe(take(1)).subscribe((user:User)  => {
      admin = user.roles.filter(role => {
        return role.authority === "ROLE_USUARIO"
      }).length > 0;
    })
    return admin;
  }

  getId(){
    let usuario = 0;
    this.getUser().pipe(take(1)).subscribe((user:User) => {
        usuario = user.jti;
    })
    return usuario;
  }

  getUsername() {
    return this.email;
  }

  getRoles(){
      return this.roles;
  }

}
