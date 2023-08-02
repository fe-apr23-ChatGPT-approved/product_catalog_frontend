import React from 'react';

import style from './Category.module.scss';

export const Category: React.FC = () => (
  <article className={style.category}>

    <div className={style.category__photo_container}></div>

    <a href="/" className={style.category__title}>
      Mobile phones
    </a>

    <p className={style.category__quantity}>95 models</p>
  </article>
);
