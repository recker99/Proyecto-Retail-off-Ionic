import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigate(['/home']);  // del login va a home
    } catch (e) {
      console.error(e);
      alert('Login failed. Please try again.');
    }
  }

  ngOnInit() {
  }

}
