import {DataSource} from '@angular/cdk/collections';
import {GameInfo} from '../../../api/games/model/game-info';
import {BehaviorSubject, catchError, debounceTime, map, merge, Observable, of, switchMap, tap} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {GamesService} from '../../../api/games/games.service';
import {MatPaginator} from '@angular/material/paginator';

export class GamesTableDatasource extends DataSource<GameInfo> {

  paginator!: MatPaginator

  private dataSubject = new BehaviorSubject<GameInfo[]>([]);

  private onLoad = new BehaviorSubject(true);

  constructor(private gamesService: GamesService, private filters: FormGroup) {
    super();
  }

  connect(): Observable<GameInfo[]> {
    return merge(this.onLoad,
      this.filters.valueChanges.pipe(debounceTime(500)),
      this.paginator.page.asObservable())
      .pipe(
        switchMap(() => this.loadData()),
        catchError(() => {
          return of([])
        })
      )
  }

  disconnect(): void {
    this.onLoad.complete();
    this.dataSubject.complete();
  }

  private loadData() {
    return this.gamesService.getAvailableGames().pipe(
      tap(response => this.paginator.length = response.items_total),
      map((response) => response.content),
      tap(response => this.dataSubject.next(response))
    )
  }
}
