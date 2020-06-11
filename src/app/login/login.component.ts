import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ErrorAlertComponent } from '../shared/components/alert/error-alert/error-alert.component';
import { AuthService } from '../core/auth/auth.service';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name: string = "Teste";
  loginForm: FormGroup;
  load: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(1)]],
      senha: ['', [Validators.required, Validators.minLength(1)]]
    })
  }

  //função login original:

  login() {
    this.load = true;
    const email = this.loginForm.get("email").value;
    const senha = this.loginForm.get("senha").value;

    this.authService.authenticate(email, senha)
      .subscribe(
        () => {
          this.router.navigate(["home"]);
        },
        err => {
          this.load = false;
          const dialogRef = this.dialog.open(ErrorAlertComponent, {
                width: '250px',
                data: {name: "Credenciais Inválidas!"}
              });
        
              dialogRef.afterClosed().subscribe(result => {
              });
        }
      )
  }
}