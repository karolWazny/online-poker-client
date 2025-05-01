import { Routes } from '@angular/router';
import {LobbyComponent} from './pages/lobby/lobby.component';
import {GameComponent} from './pages/game/game.component';

export const routes: Routes = [
  {path: 'lobby', component: LobbyComponent},
  {path: 'game', component: GameComponent}
];
