import { Injectable } from '@angular/core';
import { AngularTokenService } from 'angular-token';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  redirectUrl: string;

  constructor(private tokenService: AngularTokenService, private router: Router) { }

  signIn(email: string, password: string): Observable<any> {

    return this.tokenService.signIn({
      login: email,
      password
    });

  }

  signUp(email: string, password: string): Observable<any> {
    return this.tokenService.registerAccount({
      login: email,
      password,
      passwordConfirmation: password
    });
  }

  logout(): Observable<any> {
    return this.tokenService.signOut();
  }

  isLoggedIn(): boolean {
    return this.tokenService.userSignedIn();
  }

  redirectAfterLogin(): void {
    const redirectTo = this.redirectUrl ? this.redirectUrl : '/posts';
    this.redirectUrl = undefined;
    this.router.navigate([redirectTo]);
  }

  redirectToLoginPage(): void {
    this.router.navigate(['/login']);
  }

}
