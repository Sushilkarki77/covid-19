import {ActionTypes} from '../enum/map.enum';
import {Action} from '@ngrx/store';
import {GlobalReport} from '../models/global-report.models';

export class GlobalReportData implements Action {
  readonly type = ActionTypes.global_report;
}

export class GlobalReportDataSuccess implements Action {
  readonly type = ActionTypes.global_report_success;

  constructor(public payload: GlobalReport) {
  }
}

export class GlobalReportDataFailure implements Action {
  readonly type = ActionTypes.global_report_failure;

  constructor(public payload: Error) {
  }
}

export type GlobalReportAction =
  | GlobalReportData
  | GlobalReportDataSuccess
  | GlobalReportDataFailure;
