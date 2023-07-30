import React from 'react';

export const Header:React.FC = () => (
  <header className="header">
    <div className="header__content">
      <img className="header__main-logo" src="./images/Logo.svg" alt="store logo" />
      <ul className="header__list">
        <li className="header__item">
          <a className="header__link" href="#home">home</a>
        </li>
        <li className="header__item header__item--is-active">
          <a className="header__link" href="#phones">phones</a>
        </li>
        <li className="header__item">
          <a className="header__link" href="#tablets">tablets</a>
        </li>
        <li className="header__item header__item--is-active">
          <a className="header__link" href="#accessories">accessories</a>
        </li>
      </ul>
    </div>
    <div className="header__buttons">
      <a className="header__button header__button--tablet" href="#like">
        <img src="./images/like.svg" alt="" />
      </a>
      <a className="header__button header__button--tablet" href="#cart">
        <img src="./images/cart.svg" alt="" />
      </a>
      <a className="header__button header__button--mobile" href="#cart">
        <img src="./images/Menu.svg" alt="" />
      </a>
    </div>
  </header>
);
