import { Injectable } from '@angular/core';
import {PokerGameServiceClient} from '../../proto/poker-game.pbsc';
import {AuthService} from './auth.service';
import {Observable, switchMap, take} from 'rxjs';
import {Event} from '../../proto/poker-event-model.pb';
import {GrpcMetadata} from '@ngx-grpc/common';
import {JoinPokerGameRequest, JoinPokerGameResponse, PokerGameHello} from '../../proto/poker-action-model.pb';

@Injectable({
  providedIn: 'root'
})
export class PokerGameService {

  constructor(private pokerGameClient: PokerGameServiceClient,
              private authService: AuthService) {
  }

  public observeEvents(): Observable<Event> {
    return this.authService.getToken$()
      .pipe(take(1), switchMap(
        token => {
          let metadata = new GrpcMetadata();
          metadata.set("Authorization", "Bearer " + token)
          return this.pokerGameClient.observeEvents(new PokerGameHello(), metadata);
        }
      ))
  }

  public join(buyIn: bigint): Observable<JoinPokerGameResponse> {
    return this.authService.getToken$()
      .pipe(take(1), switchMap(
        token => {
          let metadata = new GrpcMetadata();
          metadata.set("Authorization", "Bearer " + token)
          let joinData = new JoinPokerGameRequest();
          joinData.buyIn = String(buyIn)
          return this.pokerGameClient.join(joinData, metadata);
        }
      ))
  }
}
