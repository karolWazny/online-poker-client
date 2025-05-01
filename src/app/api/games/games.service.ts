import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameInfo} from './model/game-info';

import { environment } from '../../../environments/environment';
import {RestPage} from '../../model/rest-page';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private httpClient: HttpClient) {
  }

  public getAvailableGames() {
    return this.httpClient.get<RestPage<GameInfo>>(`${environment.config.url.backendRest}/games`);
  }

}
