import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<string> {
    let subject = new BehaviorSubject(username);
    setTimeout(() => {
      subject.next(username);
      subject.complete();
    }, 1500);
    return subject.asObservable();
  }
}
