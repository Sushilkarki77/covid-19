import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {MapService} from '../services/map.service';
import {LoadData, LoadDataFailure, LoadDataSuccess} from '../actions/map.actions';
import {ActionTypes} from '../enum/map.enum';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class MapEffects {
  @Effect() loadData$ = this.actions$.pipe(
    ofType<LoadData>(ActionTypes.get),
    mergeMap(data => this.mapService.get(data.payload).pipe(
      map(data => new LoadDataSuccess(data)),
      catchError(error => of(new LoadDataFailure(error)))
      )
    )
  );

  constructor(private actions$: Actions, private mapService: MapService) {
  }
}
