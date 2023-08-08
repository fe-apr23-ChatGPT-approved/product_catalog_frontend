import React from 'react';
import { Category } from '../Category';
import phonesImg from '../../images/category-photo-phones.png';
import tabletsImg from '../../images/category-photo-tablets.png';
import accessoriesImg from '../../images/category-photo-accessories.png';

import style from './ShopByCategories.module.scss';

export const categories = [
  {
    id: 1,
    title: 'Mobile Phones',
    image: phonesImg,
    url: '/phones',
    quantity: 100,
  },
  {
    id: 2,
    title: 'Tablets',
    image: tabletsImg,
    url: '/tablets',
    quantity: 100,
  },
  {
    id: 3,
    title: 'Accessories',
    image: accessoriesImg,
    url: '/accessories',
    quantity: 100,
  },
];

export const ShopByCategories: React.FC = () => (
  
  <section className={style['shop-by-categories']}>
    <h2 className={style['shop-by-categories__title']}>Shop by category</h2>

    <ul className={style['shop-by-categories__list']}>
      {categories.map(category => (
        <li key={category.id} className={style['shop-by-categories__list-item']}>
          <Category
            title={category.title}
            quantity={category.quantity}
            url={category.url}
            image={category.image}
          />
        </li>
      ))}
    </ul>

  </section>
);
