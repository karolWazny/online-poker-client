import { Routes } from '@angular/router';
import {LobbyComponent} from './pages/lobby/lobby.component';
import {PlaygroundComponent} from './pages/playground/playground.component';
import {GameComponent} from './pages/game/game.component';

export const routes: Routes = [
  {path: 'lobby', component: LobbyComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: 'game', component: GameComponent}
];
