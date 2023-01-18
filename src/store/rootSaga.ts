import { all, fork } from 'redux-saga/effects';
import { shipsRootSaga } from './ships/sagas';

export function* rootSaga(): Iterator<unknown> {
  yield all([fork(shipsRootSaga)]);
}
