import { SagaIterator } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { getShipsWatcher } from './getShips/watcher';
import { getFiltersWatcher } from './getFilters/watcher';

export function* shipsRootSaga(): SagaIterator {
  yield fork(getShipsWatcher);
  yield fork(getFiltersWatcher);
}
