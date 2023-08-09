import React from 'react';
import style from './NotFoundPage.module.scss';
import astronaut from '../../images/astronaut.png';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
  <div className={style['not-found-page']}>
    <h1 className={style['not-found-page__title']}>404</h1>

    <h3 className={style['not-found-page__text']}>
      LOST IN
      <span className={style['not-found-page__text--crossedOut']}> SPACE </span>
      Nice Gadgets? Hmm, looks like this page is not found.
    </h3>

    <Link to={'/home'}>
      <button className={style['not-found-page__link']}>Go Home</button>
    </Link>

    <img
      className={style['not-found-page__img']}
      src={astronaut}
      alt={astronaut}
    />
  </div>
);