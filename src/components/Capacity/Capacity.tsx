import { FC, useCallback } from 'react';
import style from './Capacity.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  productDetailsId: string;
  actualCapacity: string;
  capacities: string[];
};
export const Capacity: FC<Props> = ({
  productDetailsId,
  actualCapacity,
  capacities,
}) => {
  const getPhoneWithCapacity = useCallback(
    (capacity: string) => {
      const splittedId = productDetailsId?.split('-');
      splittedId[splittedId.length - 2] = capacity.toLowerCase();
      const idWithNewCapacity = splittedId.join('-');

      return `../${idWithNewCapacity}`;
    },
    [productDetailsId],
  );

  return (
    <div className={style.capacity}>
      <h2 className={style.capacity__title}>Select capacity</h2>
      <div className={style.capacity__list}>
        {capacities.map((capacity) => (
          <Link
            key={capacity}
            to={getPhoneWithCapacity(actualCapacity)}
            className={cn(style.capacity__link, {
              [style['capacity__link--active']]: capacity === actualCapacity,
            })}
          >
            <div className={style.capacity__item}>{capacity}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
