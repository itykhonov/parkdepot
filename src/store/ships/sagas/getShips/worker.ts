import { GetShipsRequestType } from '../../types';
import { SagaIterator } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { getShipsFailure, getShipsSuccess } from '../../actions';
import { GET_SHIPS } from 'src/graphql/get-ships.query';
import { query } from 'src/services/service';

export function* getShipsWorker({
  payload: { offset, limit, type }
}: GetShipsRequestType): SagaIterator {
  try {
    const result = yield query({
      query: GET_SHIPS,
      input: {
        offset,
        limit,
        find: {
          type: type === 'All' ? '' : type
        }
      }
    });
    if (result) {
      yield put(
        getShipsSuccess({
          data: result.data.ships
        })
      );
    } else {
      yield put(
        getShipsFailure({
          error: { message: 'No results SEARCH_ITEMS', status: 404 }
        })
      );
    }
  } catch (error: unknown) {
    yield put(
      getShipsFailure({
        error: { message: 'Request failed with status code 404', status: 404 }
      })
    );
  }
}
