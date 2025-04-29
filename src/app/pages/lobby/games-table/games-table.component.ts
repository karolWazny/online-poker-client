import {Component} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';

export interface PeriodicElement {
  id: string
  name: string;
  players: number
  max_players: number
  buy_in: number
  small_blind: number
  big_blind: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "1", name: 'Friendly Game', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: "2", name: 'Unfriendly Game', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: "3", name: 'Gangsta', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: "4", name: 'Uber-Gangsta', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: "5", name: 'Reservoir Dogs', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: "6", name: 'Casino Royal', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: '7', name: 'Le Chiffre', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: '8', name: 'Stajnia', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
  {id: '9', name: 'Night at the Inventory', players: 1, max_players: 8, buy_in: 1000, big_blind: 50, small_blind: 20},
];


@Component({
  selector: 'app-games-table',
  imports: [
    MatTableModule,
    MatButton
  ],
  templateUrl: './games-table.component.html',
  styleUrl: './games-table.component.scss'
})
export class GamesTableComponent {
  displayedColumns: string[] = ['id', 'name', 'players', 'blinds', 'buyIn', 'join'];
  dataSource = ELEMENT_DATA;
}
