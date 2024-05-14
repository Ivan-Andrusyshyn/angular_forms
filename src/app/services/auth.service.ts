import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from '../components/models/UserData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  router = inject(Router);

  signUpForm: UserData | null = null;

  userInfo = null;
  isAuthenticated: boolean = true;

  onSignUp(userData: UserData): void {
    console.log(userData);

    this.signUpForm = userData;

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
