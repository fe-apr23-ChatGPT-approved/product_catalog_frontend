import React from 'react';
import logo from '../../images/Logo.svg';
import cart from '../../images/Cart.svg';
import close from '../../images/Close.svg';
import like from '../../images/Like.svg';
import burgerMenu from '../../images/Menu.svg';

interface Props {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<Props> = ({ menu, setMenu }) => {
  const handleClick = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <header className="header">
      <div className="header__content">
        <img className="header__main-logo" src={logo} alt="main logo" />
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="#home">
              home
            </a>
          </li>
          <li className="header__item header__item--is-active">
            <a className="header__link" href="#phones">
              phones
            </a>
          </li>
          <li className="header__item">
            <a className="header__link" href="#tablets">
              tablets
            </a>
          </li>
          <li className="header__item header__item--is-active">
            <a className="header__link" href="#accessories">
              accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="header__buttons">
        <a className="header__button header__button--tablet" href="#like">
          <img src={like} alt="like button" />
        </a>
        <a className="header__button header__button--tablet" href="#cart">
          <img src={cart} alt="cart button" />
        </a>
        <a
          className="header__button header__button--mobile"
          href="#cart"
          onClick={handleClick}
        >
          <img src={!menu ? burgerMenu : close} alt="menu button" />
        </a>
      </div>
    </header>
  );
};
