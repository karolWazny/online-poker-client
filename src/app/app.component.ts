import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PlayingCardWrapperComponent} from './playing-card-wrapper/playing-card-wrapper.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PlayingCardWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'online-poker-client';
}
