import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userName: string | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.userName = user?.displayName || null;
      this.isLoggedIn = !!user; // Establecer isLoggedIn en true
    });
  }

}
