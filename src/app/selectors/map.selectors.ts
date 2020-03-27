import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MapState} from '../reducers/map.reducers';

export const getMapState = createFeatureSelector<MapState>('map');

export const getListState = createSelector(
  getMapState,
  (state: MapState) => state.list
);
export const getLoadingState = createSelector(
  getMapState,
  (state) => state.loading
);
export const getErrorState = createSelector(
  getMapState,
  (state) => state.error
);
