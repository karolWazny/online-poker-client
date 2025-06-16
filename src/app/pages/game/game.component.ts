import {AfterViewInit, Component, OnDestroy} from '@angular/core';
import {PlayingCardWrapperComponent} from '../../playing-card-wrapper/playing-card-wrapper.component';
import {debounceTime, merge, Subject, Subscription} from 'rxjs';
import {PokerGameServiceClient} from '../../../proto/poker-game.pbsc';
import {Event, GameEventType} from '../../../proto/poker-event-model.pb';
import {MessageType} from '../../../proto/poker-common-model.pb';
import {CardDto} from '../../model/card-dto';
import {GrpcMetadata} from '@ngx-grpc/common';
import {PokerGameHello} from '../../../proto/poker-action-model.pb';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatSlider, MatSliderThumb} from '@angular/material/slider';
import {PokerPlayer} from '../../model/poker-player';

@Component({
  selector: 'app-game',
  imports: [PlayingCardWrapperComponent, MatFormField, MatInput, MatLabel, ReactiveFormsModule, MatButton, MatSlider, MatSliderThumb],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements AfterViewInit, OnDestroy {

  $gameEventsSubscription!: Subscription;
  $pingTimeoutSubject: Subject<string> = new Subject<string>();

  board: CardDto[] = []
  players: PokerPlayer[] = [{
    username: 'villain',
    stack: 2500,
    pot: 0
  }]

  usernameFormField = new FormControl('')

  constructor(private gameServiceClient: PokerGameServiceClient) {
  }

  ngOnDestroy(): void {
    this.$gameEventsSubscription.unsubscribe();
    this.$pingTimeoutSubject.complete();
  }

  ngAfterViewInit(): void {
    merge(this.$pingTimeoutSubject
      .pipe(debounceTime(5000)), this.usernameFormField.valueChanges.pipe(debounceTime(3000)))
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
    let metadata = new GrpcMetadata();
    metadata.set("Authorization", "Bearer " + this.getHeroLogin())
    this.$gameEventsSubscription =  this.gameServiceClient.observeEvents(new PokerGameHello(), metadata)
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
    if (value.eventData?.gameEventType === GameEventType.STREET_UPDATE) {
      value?.eventData?.communityCards?.forEach((card) => {
        this.board.push({
          suit: card.suit, rank: card.rank
        })
      })
    } else if (value.eventData?.gameEventType === GameEventType.PLAYER_JOINED) {
      let username = value.eventData?.newPlayerData?.username || '';
      if (!username) return;
      let updatedPlayerNames = value.eventData?.newPlayerData?.updatedPlayersList || [];
      if (!updatedPlayerNames) return;
      let buyIn = Number.parseInt(value.eventData?.newPlayerData?.buyIn || '0');
      let heroIndex = updatedPlayerNames.findIndex((username) => {
        return username === this.getHeroLogin()
      })
      updatedPlayerNames = updatedPlayerNames.slice(heroIndex).concat(updatedPlayerNames.slice(0, heroIndex))
      updatedPlayerNames = updatedPlayerNames.slice(1)
      let newPlayerIndex = updatedPlayerNames.findIndex((username) => {
        return username === this.getHeroLogin()
      })
      this.players = this.players.slice(0, newPlayerIndex)
        .concat([{username: username, pot: 0, stack: buyIn}])
        .concat(this.players.slice(newPlayerIndex))
    }
  }

  private getHeroLogin() {
    return this.usernameFormField.value;
  }
}
