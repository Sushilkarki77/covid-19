import {MapData} from '../models/map.models';
import {ActionTypes} from '../enum/map.enum';
import {Action} from '@ngrx/store';

export class LoadData implements Action {
  readonly type = ActionTypes.get;

  constructor(public payload: any) {
  }
}

export class LoadDataSuccess implements Action {
  readonly type = ActionTypes.get_success;

  constructor(public payload: MapData) {
  }
}

export class LoadDataFailure implements Action {
  readonly type = ActionTypes.get_failure;

  constructor(public payload: Error) {
  }
}

export type MapAction =
  | LoadData
  | LoadDataSuccess
  | LoadDataFailure;
