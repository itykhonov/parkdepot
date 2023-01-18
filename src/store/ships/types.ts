import { IGeneralMessage, IGeneralMessageResponse } from 'src/types/global';
import {
  GET_FILTERS_REQUEST,
  GET_FILTERS_SUCCESS,
  GET_FILTERS_FAILURE,
  GET_SHIPS_FAILURE,
  GET_SHIPS_REQUEST,
  GET_SHIPS_SUCCESS
} from './actionTypes';

export interface IShip {
  id: string;
  type: string;
  image: string;
  home_port: string;
  name: string;
  roles: string[];
  url: string;
  weight_kg: number;
  year_built: number;
  missions: IMission[];
}

export interface IMission {
  flight: string;
  name: string;
}

export interface IShips {
  ships: IShip[];
  filters: Record<string, number>;
  type: string;
  offset: number;
  limit: number;
}

export interface IShipsState {
  data: IShips;
  loading: boolean;
  error: IGeneralMessage;
}

export interface IOption {
  value: string;
  label: string;
}

export interface IShipsRequestPayload {
  offset: number;
  limit: number;
  type: string;
}

export interface IShipsSuccessPayload {
  data: IShip[];
}

export interface IShipsFailurePayload {
  error: IGeneralMessageResponse;
}

export interface IFiltersSuccessPayload {
  data: Record<string, number>;
}

export interface IFiltersFailurePayload {
  error: IGeneralMessageResponse;
}

export type GetShipsRequestType = {
  type: typeof GET_SHIPS_REQUEST;
  payload: IShipsRequestPayload;
};

export type GetShipsSuccessType = {
  type: typeof GET_SHIPS_SUCCESS;
  payload: IShipsSuccessPayload;
};

export type GetShipsFailureType = {
  type: typeof GET_SHIPS_FAILURE;
  payload: IShipsFailurePayload;
};

export type GetFitlersRequestType = {
  type: typeof GET_FILTERS_REQUEST;
};

export type GetFiltersSuccessType = {
  type: typeof GET_FILTERS_SUCCESS;
  payload: IFiltersSuccessPayload;
};

export type GetFiltersFailureType = {
  type: typeof GET_FILTERS_FAILURE;
  payload: IFiltersFailurePayload;
};

export type ShipsActionsTypes =
  | GetShipsRequestType
  | GetShipsSuccessType
  | GetShipsFailureType
  | GetFitlersRequestType
  | GetFiltersSuccessType
  | GetFiltersFailureType;
