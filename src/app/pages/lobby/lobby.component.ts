import { Component } from '@angular/core';
import {MatFormField} from '@angular/material/form-field';
import {MatButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatLabel} from '@angular/material/form-field';

@Component({
  selector: 'app-lobby',
  imports: [
    MatFormField,
    MatButton,
    MatInput,
    MatLabel
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

}
