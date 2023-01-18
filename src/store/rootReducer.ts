import { combineReducers } from 'redux';
import shipsReducer from './ships/reducer';

const rootReducer = combineReducers({
  ships: shipsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
