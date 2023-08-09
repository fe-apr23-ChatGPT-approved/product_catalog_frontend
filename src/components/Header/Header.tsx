import React, { useContext } from 'react';
import logo from '../../images/logo.svg';
import cart from '../../images/Cart.svg';
import close from '../../images/Close.svg';
import like from '../../images/Like.svg';
import burgerMenu from '../../images/Menu.svg';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Header.module.scss';
import { ProductContext } from '../cartContext/ProductContext';
import { FavoritesContext } from '../FavouritesContext/FavouritesContext';

interface Props {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ isOpenMenu, setIsOpenMenu }) => {
  const pages = ['home', 'phones', 'tablets', 'accessories'];
  const { totalCount } = useContext(ProductContext);
  const { totalFavCount } = useContext(FavoritesContext);

  const cartCounterIsActive = totalCount() !== 0;
  // const cartCounterIsActive = totalFavCoun() !== 0;

  const handleClick = () => {
    setIsOpenMenu((prevState) => !prevState);
  };

  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <img className={style.header__main_logo} src={logo} alt={'main logo'} />
        {!isOpenMenu && (
          <ul className={style.header__list}>
            {pages.map((page) => (
              <li className={style.header__item} key={page}>
                <NavLink
                  className={({ isActive }) =>
                    cn(`${style.header__link}`, {
                      [style['header__link--is-active']]: isActive,
                    })
                  }
                  to={`/${page}`}
                >
                  {page}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className={style.header__buttons}>
        <Link
          className={`${style.header__button} ${style['header__button--tablet']}`}
          to={'/favourites'}
        >
          <img src={like} alt={'favourites button'} />
          {cartCounterIsActive && (
            <div className={style.header__counter}>
              {totalFavCount()}
            </div>
          )}
        </Link>
        <Link
          className={`${style.header__button} ${style['header__button--tablet']}`}
          to={'/cart'}
        >
          <img src={cart} alt={'cart button'} />
          {cartCounterIsActive && <div className={style.header__counter}>{totalCount()}</div>}
        </Link>
        <div
          className={`${style.header__button} ${style['header__button--mobile']}`}
          onClick={handleClick}
        >
          <img src={!isOpenMenu ? burgerMenu : close} alt={'menu button'} />
        </div>
      </div>
    </header>
  );
};
