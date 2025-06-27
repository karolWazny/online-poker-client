import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {map} from 'rxjs';
import {Router} from '@angular/router';
import {PokerGameService} from '../../services/poker-game.service';

@Component({
  selector: 'app-login-page',
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  loginForm!: FormGroup;

  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private gameService: PokerGameService) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  logIn(): void {
    console.log(this.loginForm.value.username)
    this.authService.login(
      this.loginForm.value.username,
      this.loginForm.value.password
    )
    this.authService.isLoggedIn$()
      .pipe(map((loggedIn) => {
        if (loggedIn) {
          this.gameService.join(BigInt(2500)).subscribe(
            _ => {
              this.router.navigateByUrl('/game').then()
            }
          )
        }
      })).subscribe()
  }
}
