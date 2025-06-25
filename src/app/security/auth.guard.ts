import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Route,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {map, Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authState: AuthService, private _router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.secure(route);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.secure(route);
  }

  private secure(route: ActivatedRouteSnapshot | Route): Observable<boolean> {
    return this.authState.isLoggedIn$().pipe(
      map(loggedIn => {
        if (!loggedIn) {
          this._router.navigateByUrl("/login").then();
          return false;
        }
        return true;
      })
    )
  }
}
