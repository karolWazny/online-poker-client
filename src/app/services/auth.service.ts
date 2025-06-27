import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';
import {selectIsLoggedIn, selectToken, selectUsername} from '../security/security.selectors';
import {Store} from '@ngrx/store';
import {loginSuccess} from '../security/security.actions';
import {AppState} from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private store: Store<AppState>) { }

  login(username: string, password: string): void {
    this.store.dispatch(loginSuccess({token: username, username: username}))
  }

  isLoggedIn$(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn)
  }

  getUsername$(): Observable<string> {
    return this.store.select(selectUsername)
      .pipe(map((username) => username || 'Guest'))
  }

  getToken$(): Observable<string | null> {
    return this.store.select(selectToken);
  }
}
