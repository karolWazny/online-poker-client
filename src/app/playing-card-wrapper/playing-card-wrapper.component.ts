import {Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core';
import {SuitDirective} from './suit.directive';
import {RankDirective} from './rank.directive';

@Component({
  selector: 'app-playing-card-wrapper',
  imports: [
    SuitDirective,
    RankDirective
  ],
  templateUrl: './playing-card-wrapper.component.html',
  styleUrl: './playing-card-wrapper.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PlayingCardWrapperComponent {
  @Input("rank")
  rank!: string

  @Input("suit")
  suit!: string
}
