import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class CheckUserLoged implements CanActivate {
  constructor(
    private authService: AuthenticationService,
    public router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isUserLoggedIn() === false) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
