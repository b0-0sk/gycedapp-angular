import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../../authenticationLogin/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRoleAdminService {
  constructor(
    private router: Router,
    private authServive: AuthenticationService
  ) {}

  canActivate() {
    if (this.authServive.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
