import { Router } from '@angular/router';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private user: AppUser,
    private router: Router
  ) {}

  login() {
    this.auth.login();
  }
  Register() {
    this.router.navigateByUrl('/RegisterPage');
  }
}
