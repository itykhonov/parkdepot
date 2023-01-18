import { createSelector } from 'reselect';
import { AppState } from '../rootReducer';

const getShips = (state: AppState) => state.ships.data.ships;
const getErrorShips = (state: AppState) => state.ships.error;
const getLoadingShips = (state: AppState) => state.ships.loading;
const getShipsFitlerOptions = (state: AppState) =>
  Object.keys(state.ships.data.filters).map((filter) => ({
    value: filter,
    label: filter
  }));
const getShipsFitlerValue = (state: AppState) => ({
  value: state.ships.data.type,
  label: state.ships.data.type
});
const getOffsetShips = (state: AppState) => state.ships.data.offset;
const getLimitShips = (state: AppState) => state.ships.data.limit;
const allItemsLoaded = (state: AppState) => {
  const allItemsCount = state.ships.data.filters[state.ships.data.type];
  return allItemsCount === state.ships.data.ships.length;
};

export const shipsSelector = createSelector(getShips, (ships) => ships);

export const shipsErrorSelector = createSelector(
  getErrorShips,
  (error) => error
);

export const shipsLoadingSelector = createSelector(
  getLoadingShips,
  (loading) => loading
);

export const shipsFitlerOptionsSelector = createSelector(
  getShipsFitlerOptions,
  (options) => options
);

export const shipsFitlerValueSelector = createSelector(
  getShipsFitlerValue,
  (option) => option
);

export const shipsOffsetSelector = createSelector(
  getOffsetShips,
  (offset) => offset
);

export const shipsLimitSelector = createSelector(
  getLimitShips,
  (limit) => limit
);

export const isShipsAllItemsLoadedSelector = createSelector(
  allItemsLoaded,
  (isLoaded) => isLoaded
);
