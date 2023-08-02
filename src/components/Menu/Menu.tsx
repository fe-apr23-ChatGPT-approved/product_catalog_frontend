import React from 'react';
import cart from '../../images/Cart.svg';
import like from '../../images/Like.svg';
import { NavLink, Link } from 'react-router-dom';
import cn from 'classnames';

import style from './Menu.module.scss';

interface Props {
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const Menu: React.FC<Props> = ({ setIsOpenMenu }) => {
  const pages = ['home', 'phones', 'tablets', 'accessories'];

  const handleClick = () => {
    setIsOpenMenu(false);
  };

  return (
    <div className={style.menu}>
      <ul className={style.menu__list}>
        {pages.map(page => (
          <li className={style.menu__item} key={page}>
            <NavLink
              className={({ isActive }) => cn(style.menu__link, {
                [style.menu__link__is_active]: isActive,
              })}
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
          className={`${style.menu__button} ${style.menu__button__tablet}`}
          to={'/cart'}
          onClick={handleClick}
        >
          <img src={like} alt={'like button'} />
        </Link>
        <Link
          className={`${style.menu__button} ${style.menu__button__tablet}`}
          to={'/cart'}
          onClick={handleClick}
        >
          <img src={cart} alt={'cart button'} />
        </Link>
      </div>
    </div>
  );
};
