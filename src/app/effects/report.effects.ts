import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {ReportData, ReportDataFailure, ReportDataSuccess} from '../actions/report.actions';
import {ActionTypes} from '../enum/map.enum';
import {ReportService} from '../services/report.service';

@Injectable()
export class ReportEffects {
  @Effect() loadData$ = this.actions$.pipe(
    ofType<ReportData>(ActionTypes.report),
    mergeMap(data => this.reportService.get(data.payload).pipe(
      map(data => new ReportDataSuccess(data[0])),
      catchError(error => of(new ReportDataFailure(error)))
      )
    )
  );

  constructor(private actions$: Actions, private reportService: ReportService) {
  }
}
