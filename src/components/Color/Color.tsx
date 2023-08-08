import { FC, useCallback } from 'react';
import style from './Color.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import cn from 'classnames';
import { getColorHexValue } from '../../constants/getColorHexValue';

type Props = {
  productDetailsId: string,
  colors: string[],
};
export const Color: FC<Props> = ({ productDetailsId, colors }) => {
  const { pathname } = useLocation();
  const [, category] = pathname.split('/');

  const getPhoneWithColor = useCallback(
    (color: string) => {
      const splittedId = productDetailsId?.split('-');
      splittedId[splittedId.length - 1] = color.toLowerCase();
      const idWithNewColor = splittedId.join('-');
  
      return `/${category}/${idWithNewColor}`;
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
