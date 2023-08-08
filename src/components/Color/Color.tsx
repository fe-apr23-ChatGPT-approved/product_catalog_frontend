import { FC, useCallback } from 'react';
import style from './Color.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { getColorHexValue } from '../../constants/getColorHexValue';

type Props = {
  productDetailsId: string,
  actualColor: string,
  colors: string[],
};
export const Color: FC<Props> = ({ productDetailsId, actualColor, colors }) => {
  const getPhoneWithColor = useCallback(
    (color: string) => {
      const splittedId = productDetailsId?.split('-');
      splittedId[splittedId.length - 1] = color.toLowerCase();
      const idWithNewColor = splittedId.join('-');

      return `../${idWithNewColor}`;
    },
    [productDetailsId],
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
          const isSelected = actualColor === color;
    
          return (
            <Link
              key={color}
              to={getPhoneWithColor(actualColor)}
              className={cn(style.color__link, {
                [style['color__link--active']]: isSelected,
              })}
            >
              <div
                style={{ backgroundColor: preparedColor }}
                className={style.color__item}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
