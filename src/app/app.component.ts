import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {}

  navigateToUserProfile() {
    this.router.navigate(['/user-profile']); 
  }

  viewSettings() {
    this.router.navigate(['/settings']); 
  }
  
  contactSupport() {
    console.log('Contacting support...');
  }

  logout() {
    this.authService.logout();
  }
}
