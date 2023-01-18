import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_FAILURE,
  GET_SHIPS_FAILURE,
  GET_SHIPS_REQUEST,
  GET_SHIPS_SUCCESS
} from './actionTypes';

import { IShipsState, ShipsActionsTypes } from './types';

const initialState: IShipsState = {
  loading: false,
  error: '',
  data: {
    ships: [],
    filters: {},
    type: 'All',
    offset: 0,
    limit: 5
  }
};

export default (
  state = initialState,
  action: ShipsActionsTypes
): IShipsState => {
  switch (action.type) {
    case GET_SHIPS_REQUEST:
      return {
        ...state,
        data: {
          ...state.data,
          ships:
            state.data.type === action.payload.type ? state.data.ships : [],
          ...action.payload
        },
        loading: true
      };
    case GET_SHIPS_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ships: [...state.data.ships, ...action.payload.data]
        },
        loading: false
      };
    case GET_SHIPS_FAILURE:
      return {
        ...state,
        error: action.payload.error.message
      };
    case GET_FILTERS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_FILTERS_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          filters: action.payload.data
        },
        loading: false
      };
    case GET_FILTERS_FAILURE:
      return {
        ...state,
        error: action.payload.error.message
      };
    default:
      return {
        ...state
      };
  }
};
