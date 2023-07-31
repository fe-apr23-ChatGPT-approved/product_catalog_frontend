/* eslint-disable react/jsx-curly-brace-presence */
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { footerLinks } from '../../constants/FooterLinks';
import Logo from '../../images/logo.svg';
import arrowUpHovered from '../../icons/arrow_up.svg';
import arrowUp from '../../icons/arrow_up_grey.svg';

import './Footer.scss';

export const Footer: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo-image">
          <img
            src={Logo}
            className="footer__logo"
            alt="Nice Gagets logo" />
        </div>

        <ul className="footer__list">
          {footerLinks.map(({ name, to }) => (
            <li className="footer__item" key={name}>
              <Link to={to} className="footer__link">
                {name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="footer__back-to-top">
          <span className="footer__back-to-top-text">
            Back to top
          </span>
          <button
            type="button"
            className="footer__back-to-top-btn"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={() => handleScrollToTop()}
          >
            <img
              className={cn('footer__arrow-up',
                {'hidden': isHovered })}
              src={arrowUp}
              alt="Arrow Up"
            />
            <img
              className={cn('footer__arrow-up',
                { 'hidden': !isHovered })}
              src={arrowUpHovered}
              alt="Arrow Up"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};
