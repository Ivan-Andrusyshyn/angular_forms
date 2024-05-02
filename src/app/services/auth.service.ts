import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);

  userInfo = null;
  isAuthenticated: boolean = true;

  constructor() {}

  onSignUp(): void {
    this.router.navigate(['/dashboard']);
  }
  onSignIn(): void {
    this.router.navigate(['/dashboard']);
  }
  onLogOut() {
    this.isAuthenticated = false;
    this.router.navigate(['/signup']);
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
