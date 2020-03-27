import {ActionTypes} from '../enum/map.enum';
import {GlobalReportAction} from '../actions/global-report.actions';
import {GlobalReport} from '../models/global-report.models';

export interface GlobalReportState {
  list: GlobalReport[];
  loading: boolean;
  error: Error;
}

const initialState: GlobalReportState = {
  list: [],
  loading: false,
  error: undefined
};

export function globalReportReducer(state = initialState, action: GlobalReportAction) {
  switch (action.type) {
    case ActionTypes.global_report:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.global_report_success:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ActionTypes.global_report_failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
