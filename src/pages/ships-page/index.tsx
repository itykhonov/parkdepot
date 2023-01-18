import React, { FC, useEffect, useState } from 'react';
import { useStyles } from './styles';
import classnames from 'classnames';
import {
  useFilters,
  useGetShips,
  useSelectShips,
  useSelectShipsFilterOptions,
  useSelectShipsFilterValue,
  useSelectShipsIsLoaded,
  useSelectShipsLimit,
  useSelectShipsLoading,
  useSelectShipsOffset
} from 'src/store/ships/hooks';
import { Filter } from './filter';
import { IOption } from 'src/store/ships/types';
import { ListView } from './list-view';
import { GalleryView } from './gallery-view';

export const ShipsPage: FC = () => {
  const styles = useStyles();
  const filterOptions = useSelectShipsFilterOptions();
  const filterValue = useSelectShipsFilterValue();
  const offset = useSelectShipsOffset();
  const limit = useSelectShipsLimit();
  const ships = useSelectShips();
  const isLoaded = useSelectShipsIsLoaded();
  const isLoading = useSelectShipsLoading();

  const [listView, setView] = useState(true);

  const getFilters = useFilters();
  const getShips = useGetShips();

  useEffect(() => {
    getFilters();
  }, [getFilters]);

  useEffect(() => {
    getShips(offset, limit, filterValue.value);
  }, [getShips]);

  const setFilterValue = (option: IOption) => {
    getShips(0, limit, option.value);
  };

  const loadMore = () => {
    getShips(ships.length, limit, filterValue.value);
  };

  return (
    <main className={classnames(styles.main, { loading: isLoading })}>
      <div className={styles.filtersHolder}>
        <div className="switcher">
          <button
            className={classnames(styles.button, { active: listView })}
            onClick={() => setView(true)}
          >
            List
          </button>
          <button
            className={classnames(styles.button, { active: !listView })}
            onClick={() => setView(false)}
          >
            Gallery
          </button>
        </div>
        <div>
          <strong>Fitler by type:</strong>
          <Filter
            filterValue={filterValue}
            options={filterOptions}
            setFilterValue={setFilterValue}
          />
        </div>
      </div>
      {listView ? (
        <ListView
          ships={ships}
          isLoaded={isLoaded}
          isLoading={isLoading}
          loadMore={loadMore}
        />
      ) : (
        <GalleryView ships={ships} isLoaded={isLoaded} loadMore={loadMore} />
      )}
    </main>
  );
};
