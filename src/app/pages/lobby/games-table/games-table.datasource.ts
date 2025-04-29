import {DataSource} from '@angular/cdk/collections';
import {GameInfo} from '../../../api/games/model/game-info';
import {BehaviorSubject, Observable} from 'rxjs';

export class GamesTableDatasource extends DataSource<GameInfo> {

  private dataSubject = new BehaviorSubject([
    {id: "1", name: 'Friendly Game', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: "2", name: 'Unfriendly Game', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: "3", name: 'Gangsta', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: "4", name: 'Uber-Gangsta', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: "5", name: 'Reservoir Dogs', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: "6", name: 'Casino Royal', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: '7', name: 'Le Chiffre', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: '8', name: 'Stajnia', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20, min_players: 3},
    {id: '9', name: 'Night at the Inventory', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 30, min_players: 3},
  ]);

  private onLoad = new BehaviorSubject(true);

  connect(): Observable<GameInfo[]> {
    return this.dataSubject.asObservable();
  }

  disconnect(): void {
    this.onLoad.complete();
    this.dataSubject.complete();
  }

}
