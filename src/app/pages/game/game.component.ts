import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {PlayingCardWrapperComponent} from '../../playing-card-wrapper/playing-card-wrapper.component';
import {debounceTime, Subject, Subscription} from 'rxjs';
import {PokerGameServiceClient} from '../../../proto/poker-game.pbsc';
import {Event, MessageType, PokerGameHello} from '../../../proto/poker-game.pb';
import {CardDto} from '../../model/card-dto';

@Component({
  selector: 'app-game',
  imports: [PlayingCardWrapperComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements AfterViewInit, OnDestroy {

  $gameEventsSubscription!: Subscription;
  $pingTimeoutSubject: Subject<string> = new Subject<string>();

  board: CardDto[] = []

  constructor(private gameServiceClient: PokerGameServiceClient) {
  }

  ngOnDestroy(): void {
    this.$gameEventsSubscription.unsubscribe();
    this.$pingTimeoutSubject.complete();
  }

  ngAfterViewInit(): void {
    this.$pingTimeoutSubject
      .pipe(debounceTime(5000))
      .subscribe({
        next: _ => {
          console.log('connection lost...')
          this.$gameEventsSubscription.unsubscribe();
          this.getGameSubscription();
        }
      })
    this.getGameSubscription();
  }

  private getGameSubscription() {
    console.log('connecting...')
    this.$gameEventsSubscription =  this.gameServiceClient.observeEvents(new PokerGameHello())
      .subscribe({
        next: value => this.handleGameEvent(value)
      });
    this.$pingTimeoutSubject.next('ping!');
  }

  private handleGameEvent(value: Event) {
    this.$pingTimeoutSubject.next('ping!')
    if (value.metatype === MessageType.PING) {
      return;
    }
    this.board.push({
      suit: value?.eventData?.communityCards?.[0].suit || 'S', rank: value?.eventData?.communityCards?.[0].rank || '2'
    })
  }
}
