import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {MatTable} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {GameInfo} from '../../../api/games/model/game-info';
import {GamesTableDatasource} from './games-table.datasource';
import {GamesService} from '../../../api/games/games.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-games-table',
  imports: [
    MatTableModule,
    MatButton,
    MatPaginator
  ],
  templateUrl: './games-table.component.html',
  styleUrl: './games-table.component.scss'
})
export class GamesTableComponent implements OnInit, AfterViewInit {

  @Input('filterFormGroup') filterFormGroup!: FormGroup;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GameInfo>;

  displayedColumns: string[] = ['id', 'name', 'players', 'blinds', 'buyIn', 'join'];
  dataSource!: GamesTableDatasource;

  constructor(private gamesService: GamesService) {
  }

  ngOnInit(): void {
    this.dataSource = new GamesTableDatasource(this.gamesService, this.filterFormGroup);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.table.dataSource = this.dataSource
    /*this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;*/
  }

}
