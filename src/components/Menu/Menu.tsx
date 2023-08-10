import React, { useContext } from 'react';
import cart from '../../images/Cart.svg';
import like from '../../images/Like.svg';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Menu.module.scss';
import { ProductContext } from '../cartContext/ProductContext';
import { FavoritesContext } from '../FavouritesContext/FavouritesContext';

interface Props {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Menu: React.FC<Props> = ({ setIsOpenMenu }) => {
  const pages = ['home', 'phones', 'tablets', 'accessories'];
  const { totalCount } = useContext(ProductContext);
  const { totalFavCount } = useContext(FavoritesContext);

  const cartCounterIsActive = totalCount !== 0;
  const favCounterIsActive = totalFavCount !== 0;

  const handleClick = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={style.menu}>
      <ul className={style.menu__list}>
        {pages.map((page) => (
          <li className={style.menu__item} key={page}>
            <NavLink
              className={({ isActive }) =>
                cn(style.menu__link, {
                  [style['menu__link--is-active']]: isActive,
                })
              }
              to={`/${page}`}
              onClick={handleClick}
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={style.menu__buttons}>
        <Link
          className={`${style.menu__button} ${style['menu__button--tablet']}`}
          to={'/favourites'}
          onClick={handleClick}
        >
          <img src={like} alt={'favourites button'} />
          {favCounterIsActive && (
            <div className={`${style.menu__counter} ${style['menu__counter--favourits']}`}>
              {totalFavCount}
            </div>
          )
          }
        </Link>
        <Link
          className={`${style.menu__button} ${style['menu__button--tablet']}`}
          to={'/cart'}
          onClick={handleClick}
        >
          <img src={cart} alt={'cart button'} />
          {cartCounterIsActive && (
            <div className={`${style.menu__counter} ${style['menu__counter--cart']}`}>
              {totalCount}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};
