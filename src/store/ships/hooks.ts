import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IGeneralMessage } from 'src/types/global';
import { getFilters, getShipsRequest } from './actions';
import {
  shipsLoadingSelector,
  shipsErrorSelector,
  shipsSelector,
  shipsFitlerOptionsSelector,
  shipsFitlerValueSelector,
  shipsOffsetSelector,
  shipsLimitSelector,
  isShipsAllItemsLoadedSelector
} from './selectors';
import { IOption, IShip } from './types';

export const useSelectShips: () => IShip[] = () => {
  return useSelector(shipsSelector);
};

export const useSelectShipsLoading: () => boolean = () => {
  return useSelector(shipsLoadingSelector);
};

export const useSelectShipsError: () => IGeneralMessage = () => {
  return useSelector(shipsErrorSelector);
};

export const useGetShips: () => (
  offset: number,
  limit: number,
  type: string
) => void = () => {
  const dispatch = useDispatch();
  return useCallback(
    (offset: number, limit: number, type: string) => {
      dispatch(getShipsRequest({ offset, limit, type }));
    },
    [dispatch]
  );
};

export const useFilters: () => () => void = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch(getFilters());
  }, [dispatch]);
};

export const useSelectShipsFilterOptions: () => IOption[] = () => {
  return useSelector(shipsFitlerOptionsSelector);
};

export const useSelectShipsFilterValue: () => IOption = () => {
  return useSelector(shipsFitlerValueSelector);
};

export const useSelectShipsOffset: () => number = () => {
  return useSelector(shipsOffsetSelector);
};

export const useSelectShipsLimit: () => number = () => {
  return useSelector(shipsLimitSelector);
};

export const useSelectShipsIsLoaded: () => boolean = () => {
  return useSelector(isShipsAllItemsLoadedSelector);
};
