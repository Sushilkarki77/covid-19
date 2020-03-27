import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {ActionTypes} from '../enum/map.enum';
import {GlobalReportService} from '../services/global-report.service';
import {GlobalReportData, GlobalReportDataFailure, GlobalReportDataSuccess} from '../actions/global-report.actions';

@Injectable()
export class GlobalReportEffects {

  @Effect() loadGlobalData$ = this.actions$.pipe(
    ofType<GlobalReportData>(ActionTypes.report),
    mergeMap(() => this.globalReportService.get().pipe(
      map(data => new GlobalReportDataSuccess(data[0])),
      catchError(error => of(new GlobalReportDataFailure(error)))
      )
    )
  );

  constructor(private actions$: Actions, private globalReportService: GlobalReportService) {
  }
}
