import {ActionTypes} from '../enum/map.enum';
import {Action} from '@ngrx/store';
import {Report} from '../models/report.models';

export class ReportData implements Action {
  readonly type = ActionTypes.report;

  constructor(public payload: any) {
  }
}

export class ReportDataSuccess implements Action {
  readonly type = ActionTypes.report_success;

  constructor(public payload: Report) {
  }
}

export class ReportDataFailure implements Action {
  readonly type = ActionTypes.report_failure;

  constructor(public payload: Error) {
  }
}

export type ReportAction =
  | ReportData
  | ReportDataSuccess
  | ReportDataFailure;
