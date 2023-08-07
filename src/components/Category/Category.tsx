import React from 'react';

import style from './Category.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  image: string,
  url: string,
  quantity: number;
}

export const Category: React.FC<Props> = ({ title, quantity, url, image }) => (
  <article className={style.category}>

    <Link to={url} className={style['category__photo-container']}>
      <img src={image} alt={`photo of ${title}`} className={style.category__photo} />
    </Link>

    <Link to={url}>
      <h4 className={style.category__title}>{title}</h4>
    </Link>

    <p className={style.category__quantity}>{`${quantity} models`}</p>
  </article>
);