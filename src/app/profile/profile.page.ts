import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string | null = null;
  userEmail: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.userName = user?.displayName || null;
      this.userEmail = user?.email || null;
    });
  }

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/login']); 
  }

}
