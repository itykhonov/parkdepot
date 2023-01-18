import React, { FC } from 'react';
import { useStyles } from './styles';
import { IShip } from 'src/store/ships/types';
import { Image } from 'src/shared/image/image';

export interface IProps {
  ship: IShip;
}

export const Ship: FC<IProps> = ({ ship }) => {
  const styles = useStyles();

  const {
    image,
    name,
    url,
    type,
    home_port,
    weight_kg,
    year_built,
    missions,
    roles
  } = ship;

  return (
    <div className={styles.item}>
      <div className="column">
        <a href={url}>
          <Image src={image} alt={name} />
        </a>
      </div>
      <div className="column">
        <h2>
          <a href={url}>{name}</a>
        </h2>
        <dl>
          {type && <dt>type</dt>}
          {type && <dd>{type}</dd>}
          {home_port && <dt>home port</dt>}
          {home_port && <dd>{home_port}</dd>}
          {weight_kg && <dt>weight</dt>}
          {weight_kg && <dd>{weight_kg} kg</dd>}
          {year_built && <dt>year built</dt>}
          {year_built && <dd>{year_built}</dd>}
          {missions.length > 0 && <dt>missions</dt>}
          {missions.length > 0 && (
            <dd>{missions.map((m) => ' ' + m.name).join(',')}</dd>
          )}
          {roles.length > 0 && <dt>roles</dt>}
          {roles.length > 0 && <dd>{roles.map((r) => ' ' + r).join(',')}</dd>}
        </dl>
      </div>
    </div>
  );
};
