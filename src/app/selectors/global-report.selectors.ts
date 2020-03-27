import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalReportState} from '../reducers/global-report.reducers';

export const getGlobalReportState = createFeatureSelector<GlobalReportState>('global_report');

export const getGRListState = createSelector(
  getGlobalReportState,
  (state: GlobalReportState) => state.list
);
export const getGRLoadingState = createSelector(
  getGlobalReportState,
  (state) => state.loading
);
export const getGRErrorState = createSelector(
  getGlobalReportState,
  (state) => state.error
);
