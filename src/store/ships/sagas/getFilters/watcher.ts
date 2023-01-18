import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_FILTERS_REQUEST } from '../../actionTypes';
import { getFiltersWorker } from './worker';

export function* getFiltersWatcher(): SagaIterator {
  yield takeEvery(GET_FILTERS_REQUEST, getFiltersWorker);
}
