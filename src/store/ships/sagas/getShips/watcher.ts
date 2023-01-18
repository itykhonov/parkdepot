import { takeEvery } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { GET_SHIPS_REQUEST } from '../../actionTypes';
import { getShipsWorker } from './worker';

export function* getShipsWatcher(): SagaIterator {
  yield takeEvery(GET_SHIPS_REQUEST, getShipsWorker);
}
