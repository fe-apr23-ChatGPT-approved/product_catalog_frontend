import React from 'react';
import logo from '../../images/logo.svg';
import cart from '../../images/Cart.svg';
import close from '../../images/Close.svg';
import like from '../../images/Like.svg';
import burgerMenu from '../../images/Menu.svg';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Header.module.scss';

interface Props {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ isOpenMenu, setIsOpenMenu }) => {
  const pages = ['home', 'phones', 'tablets', 'accessories'];

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
          to={'/like'}
        >
          <img src={like} alt={'like button'} />
        </Link>
        <Link
          className={`${style.header__button} ${style['header__button--tablet']}`}
          to={'cart'}
        >
          <img src={cart} alt={'cart button'} />
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
