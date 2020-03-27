import {MapState} from '../reducers/map.reducers';
import {ReportState} from '../reducers/report.reducers';
import {GlobalReportState} from '../reducers/global-report.reducers';

export interface AppState {
  readonly map: MapState;
}

export interface AppStateReport {
  readonly report: ReportState;
}

export interface GlobalAppStateReport {
  readonly report: GlobalReportState;
}
