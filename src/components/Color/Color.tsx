
import { FC, useCallback } from 'react';
import style from './Color.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { getColorHexValue } from '../../functions/getColorHexValue';

type Props = {
  productDetailsId: string,
  colors: string[],
  nameSpacedId: string,
  capacity: string
};
export const Color: FC<Props> = ({
  productDetailsId,
  colors,
  nameSpacedId,
  capacity,
}) => {
  const { pathname } = useLocation();
  const [, category] = pathname.split('/');

  const getPhoneWithColor = useCallback(
    (color: string) => {
      const model = `${nameSpacedId}-${capacity.toLowerCase()}-${color.toLowerCase()}`;
      const idWithNewCapacity = model.replace(' ', '-');
  
      return `/${category}/${idWithNewCapacity}`;
    },
    [productDetailsId, category],
  );

  return (
    <section className={style.color}>
      <div className={style.color__info}>
        <h2 className={style.color__title}>
          Available colors
        </h2>
        <span className={style.color__productId}>
          ID: {productDetailsId}
        </span>
      </div>
      <div className={style.color__list}>
        {colors.map((color) => {
          const preparedColor = getColorHexValue(color);

          return (
            <NavLink
              key={color}
              to={getPhoneWithColor(color)}
              className={({ isActive }) => cn(style.color__link, {
                [style['color__link--active']]: isActive,
              })}
            >
              <div
                style={{ backgroundColor: preparedColor }}
                className={style.color__item}
              />
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};
