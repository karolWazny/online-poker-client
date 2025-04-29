import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {GameInfo} from '../../../api/games/model/game-info';
import {GamesTableDatasource} from './games-table.datasource';


@Component({
  selector: 'app-games-table',
  imports: [
    MatTableModule,
    MatButton
  ],
  templateUrl: './games-table.component.html',
  styleUrl: './games-table.component.scss'
})
export class GamesTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'players', 'blinds', 'buyIn', 'join'];
  dataSource!: GamesTableDatasource;

  ngOnInit(): void {
    this.dataSource = new GamesTableDatasource();
  }

}
