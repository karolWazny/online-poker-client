import { Routes } from '@angular/router';
import {LobbyComponent} from './pages/lobby/lobby.component';
import {PlaygroundComponent} from './pages/playground/playground.component';
import {GameComponent} from './pages/game/game.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {AuthGuard} from './security/auth.guard';

export const routes: Routes = [
  {path: '', component: LobbyComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
  {path: 'lobby', component: LobbyComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
  {path: 'playground', component: PlaygroundComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
  {path: 'game', component: GameComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
  {path: 'login', component: LoginPageComponent}
];
