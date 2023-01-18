import React, { FC } from 'react';
import { IShip } from 'src/store/ships/types';
import Slider from 'react-slick';
import { Ship } from './ship';

export interface IProps {
  ships: IShip[];
  isLoaded: boolean;
  loadMore: () => void;
}

export const GalleryView: FC<IProps> = ({ ships, isLoaded, loadMore }) => {
  const settings = {
    draggable: false,
    swipe: false,
    infinite: false,
    initialSlide: 0,
    afterChange: (index: number) => {
      if (index === ships.length - 1 && !isLoaded) {
        loadMore();
      }
    }
  };

  if (!ships.length) {
    return null;
  }

  return (
    <Slider {...settings}>
      {ships.map((ship: IShip, index: number) => {
        return <Ship key={ship.id + '-' + index} ship={ship} />;
      })}
    </Slider>
  );
};
