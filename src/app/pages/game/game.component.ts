import { Component } from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {PlayingCardWrapperComponent} from '../../playing-card-wrapper/playing-card-wrapper.component';

@Component({
  selector: 'app-game',
  imports: [
    PlayingCardWrapperComponent
  ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

}
