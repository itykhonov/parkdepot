import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_FAILURE,
  GET_SHIPS_FAILURE,
  GET_SHIPS_REQUEST,
  GET_SHIPS_SUCCESS
} from './actionTypes';
import {
  GetFitlersRequestType,
  GetFiltersSuccessType,
  GetFiltersFailureType,
  GetShipsFailureType,
  GetShipsRequestType,
  GetShipsSuccessType,
  IShipsFailurePayload,
  IShipsRequestPayload,
  IShipsSuccessPayload,
  IFiltersSuccessPayload,
  IFiltersFailurePayload
} from './types';

export const getShipsRequest = (
  payload: IShipsRequestPayload
): GetShipsRequestType => ({
  type: GET_SHIPS_REQUEST,
  payload
});

export const getShipsSuccess = (
  payload: IShipsSuccessPayload
): GetShipsSuccessType => ({
  type: GET_SHIPS_SUCCESS,
  payload
});

export const getShipsFailure = (
  payload: IShipsFailurePayload
): GetShipsFailureType => ({
  type: GET_SHIPS_FAILURE,
  payload
});

export const getFilters = (): GetFitlersRequestType => ({
  type: GET_FILTERS_REQUEST
});

export const getFiltersSuccess = (
  payload: IFiltersSuccessPayload
): GetFiltersSuccessType => ({
  type: GET_FILTERS_SUCCESS,
  payload
});

export const getFiltersFailure = (
  payload: IFiltersFailurePayload
): GetFiltersFailureType => ({
  type: GET_FILTERS_FAILURE,
  payload
});
