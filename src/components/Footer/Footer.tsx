import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { footerLinks } from '../../constants/FooterLinks';
import Logo from '../../images/logo.svg';
import arrowUpHovered from '../../icons/arrow_up.svg';
import arrowUp from '../../icons/arrow_up_grey.svg';

import style from './Footer.module.scss';
import { scrollToTop } from '../../constants/ScrollToTop';

export const Footer: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <footer className={style.footer}>
      <div className={style.footer__container}>
        <div className={style['footer__logo-image']}>
          <img
            src={Logo}
            className={style.footer__logo}
            alt={'Nice Gadgets logo'}
          />
        </div>

        <ul className={style.footer__list}>
          {footerLinks.map(({ name, to }) => (
            <li className={style.footer__item} key={name}>
              <Link to={to} className={style.footer__link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className={style['footer__back-to-top']}>
          <span className={style['footer__back-to-top-text']}>Back to top</span>
          <button
            type={'button'}
            className={style['footer__back-to-top-btn']}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={() => scrollToTop()}
          >
            <img
              className={cn(style['footer__arrow-up'], {
                [style['footer__arrow-up--hidden']]: isHovered,
              })}
              src={arrowUp}
              alt={'Arrow Up'}
            />
            <img
              className={cn(style['footer__arrow-up'], {
                [style['footer__arrow-up--hidden']]: !isHovered,
              })}
              src={arrowUpHovered}
              alt={'Arrow Up'}
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
