import {MapData} from '../models/map.models';
import {MapAction} from '../actions/map.actions';
import {ActionTypes} from '../enum/map.enum';

export interface MapState {
  list: MapData[];
  loading: boolean;
  error: Error;
}

const initialState: MapState = {
  list: [],
  loading: false,
  error: undefined
};

export function mapReducer(state = initialState, action: MapAction) {
  switch (action.type) {
    case ActionTypes.get:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.get_success:
      return {
        ...state,
        list: action.payload,
        loading: false
      };
    case ActionTypes.get_failure:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
