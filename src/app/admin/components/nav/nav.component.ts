import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AuthenticationService } from 'src/app/core/service/authenticationLogin/authentication.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay() 
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private auth: AuthenticationService,
    private router: Router
  ) {}

  logout() {
    this.auth.logOut();
    this.router.navigate(['./home']);

  }

}
