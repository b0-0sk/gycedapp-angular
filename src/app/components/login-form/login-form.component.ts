import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/service/authenticationLogin/authentication.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {

  username = new FormControl('username');
  password = new FormControl('password');
  constructor(
    private loginService: AuthenticationService,
    private router: Router
  ) {}

  public login() {
    this.loginService.auth(this.username.value, this.password.value).subscribe((data) => {
      alert(this.username);
      alert(this.password);
    });
  }
}
