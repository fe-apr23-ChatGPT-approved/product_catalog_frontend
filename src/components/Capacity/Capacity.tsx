import { FC, useCallback } from 'react';
import style from './Capacity.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  productDetailsId: string;
  capacities: string[];
};
export const Capacity: FC<Props> = ({
  productDetailsId,
  capacities,
}) => {
  const { pathname } = useLocation();
  const [, category] = pathname.split('/');
  
  const getPhoneWithCapacity = useCallback(
    (capacity: string) => {
      const splittedId = productDetailsId?.split('-');
      splittedId[splittedId.length - 2] = capacity.toLowerCase();
      const idWithNewCapacity = splittedId.join('-');
  
      return `/${category}/${idWithNewCapacity}`;
    },
    [productDetailsId, category],
  );

  return (
    <div className={style.capacity}>
      <h2 className={style.capacity__title}>Select capacity</h2>
      <div className={style.capacity__list}>
        {capacities.map((capacity) => (
          <NavLink
            key={capacity}
            to={getPhoneWithCapacity(capacity)}
            className={({isActive}) => cn(style.capacity__link, {
              [style['capacity__link--active']]: isActive,
            })}
          >
            <div className={style.capacity__item}>{capacity}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
