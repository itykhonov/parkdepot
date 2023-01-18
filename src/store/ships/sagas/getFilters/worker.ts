import { SagaIterator } from 'redux-saga';
import { put } from 'redux-saga/effects';
import { getFiltersSuccess, getFiltersFailure } from '../../actions';
import { filtersAdapter } from '../../helper';
import { GET_FILTERS } from 'src/graphql/get-filters.query';
import { query } from 'src/services/service';

export function* getFiltersWorker(): SagaIterator {
  try {
    const result = yield query({
      query: GET_FILTERS
    });
    if (result) {
      yield put(
        getFiltersSuccess({
          data: filtersAdapter(result.data.ships)
        })
      );
    } else {
      yield put(
        getFiltersFailure({
          error: { message: 'No results SEARCH_ITEMS', status: 404 }
        })
      );
    }
  } catch (error: unknown) {
    yield put(
      getFiltersFailure({
        error: { message: 'Request failed with status code 404', status: 404 }
      })
    );
  }
}
