import React, { FC } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { IShip } from 'src/store/ships/types';
import { Ship } from './ship';

export interface IProps {
  ships: IShip[];
  isLoading: boolean;
  isLoaded: boolean;
  loadMore: () => void;
}

export const ListView: FC<IProps> = ({
  ships,
  isLoaded,
  isLoading,
  loadMore
}) => {
  const [sentryRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: !isLoaded,
    onLoadMore: () => {
      if (!isLoading && !isLoaded) {
        loadMore();
      }
    }
  });

  if (!ships.length) {
    return null;
  }

  return (
    <div>
      {ships.map((ship: IShip, index: number) => {
        return <Ship key={ship.id + '-' + index} ship={ship} />;
      })}
      {ships.length > 0 && (isLoading || !isLoaded) && (
        <div ref={sentryRef}>Loading...</div>
      )}
    </div>
  );
};
