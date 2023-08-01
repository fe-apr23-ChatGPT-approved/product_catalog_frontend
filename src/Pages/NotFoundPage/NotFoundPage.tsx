import React from 'react';
import style from './NotFoundPage.module.scss';
import astronaut from '../../images/page-not-found-astronaut.png';

export const NotFoundPage: React.FC = () => (
  <div className={style.not_found_page}>
    
    <h1 className={style.not_found_page__title}>404</h1>
    
    <h3 className={style.not_found_page__text}>
      LOST IN
      <span className={style.not_found_page__text__crossedOut}> SPACE </span>
      App-Name? Hmm, looks like this page is not found.
    </h3>
    
    <a href="#">
      <button className={style.not_found_page__link}>Go Home</button>
    </a>

    <img className={style.not_found_page__img} src={astronaut} alt={astronaut} />

  </div>
);