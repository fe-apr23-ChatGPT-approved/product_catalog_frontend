import React from 'react';
import cart from '../../images/Cart.svg';
import like from '../../images/Like.svg';

export const Menu: React.FC = () => (
  <div className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <a className="menu__link" href="#home">
          home
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#phones">
          phones
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#tablets">
          tablets
        </a>
      </li>
      <li className="menu__item">
        <a className="menu__link" href="#accessories">
          accessories
        </a>
      </li>
    </ul>

    <div className="menu__buttons">
      <a className="menu__button menu__button--like" href="#like">
        <img src={like} alt="like button" />
      </a>
      <a className="menu__button" href="#cart">
        <img src={cart} alt="cart button" />
      </a>
    </div>
  </div>
);
