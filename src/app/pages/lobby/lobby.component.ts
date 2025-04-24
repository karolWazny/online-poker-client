import { Component } from '@angular/core';
import {PlayingCardWrapperComponent} from '../../playing-card-wrapper/playing-card-wrapper.component';

@Component({
  selector: 'app-lobby',
  imports: [
    PlayingCardWrapperComponent
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent {

}
