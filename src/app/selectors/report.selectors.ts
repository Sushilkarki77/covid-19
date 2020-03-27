import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ReportState} from '../reducers/report.reducers';

export const getReportState = createFeatureSelector<ReportState>('report');

export const getRListState = createSelector(
  getReportState,
  (state: ReportState) => state.list
);
export const getRLoadingState = createSelector(
  getReportState,
  (state) => state.loading
);
export const getRErrorState = createSelector(
  getReportState,
  (state) => state.error
);
