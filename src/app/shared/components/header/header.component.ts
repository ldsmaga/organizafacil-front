import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public email:any; 


  constructor(
    private userService: UserService, private router: Router) { 
}

  logout(){
    this.userService.logout();
    this.router.navigate(['/']);
  }

  getEmail(){
    this.email = this.userService.getUsername();
  }

  ngOnInit(): void {
    this.getEmail();
  }

}
