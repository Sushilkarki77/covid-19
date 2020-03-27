import {ActionTypes} from '../enum/map.enum';
import {Report} from '../models/report.models';
import {ReportAction} from '../actions/report.actions';

export interface ReportState {
  list: Report[];
  loading: boolean;
  error: Error;
}

const initialState: ReportState = {
  list: [],
  loading: false,
  error: undefined
};

export function reportReducer(state = initialState, action: ReportAction) {
  switch (action.type) {
    case ActionTypes.report:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.report_success:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ActionTypes.report_failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
