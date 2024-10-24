import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  username: string = '';  
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  async register() {
    try {
      await this.authService.register(this.username, this.email, this.password);
      this.router.navigate(['/home']);  
    } catch (e) {
      console.error(e);
      alert('Registration failed. Please try again.');
    }
  }

}
