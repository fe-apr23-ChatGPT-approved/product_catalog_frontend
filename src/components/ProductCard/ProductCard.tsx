import React, { useState } from 'react';
import cn from 'classnames';
import style from './ProductCard.module.scss';
import { Product } from '../../types/product';
import { Link } from 'react-router-dom';

import heart from '../../icons/Add to fovourites.svg';
import favouriteheart from '../../icons/Favourites Filled (Heart Like).svg';

// interface Props {
//   product: Product;
// }

// export const ProductCard: React.FC = ({ product }) => {
export const ProductCard: React.FC = () => {
  const [productAdded, setProductAdded] = useState(false);
  const [productFavourite, setProductFavourite] = useState(false);

  const buttonText = productAdded ? 'Added' : 'Add to cart';

  const handleAddProduct = () => {
    setProductAdded(!productAdded);
  };

  const handleAddFavourite = () => {
    setProductFavourite(!productFavourite);
  };

  const product = {
    id: 1,
    category: 'phones',
    itemId: 'apple-iphone-7-32gb-black',
    name: 'Apple iPhone 7 32GB Black',
    fullPrice: 400,
    price: 375,
    screen: '4.7 IPS',
    capacity: '32GB',
    color: 'black',
    ram: '2GB',
    year: 2016,
    image: 'img/phones/apple-iphone-7/black/00.webp',
  };

  const {
    itemId,
    image,
    name,
    category,
    fullPrice,
    price,
    screen,
    capacity,
    ram,
  } = product;

  const productPageLink = `/${category}/${itemId}`;
  const imageLink = `https:gadget-store-api.onrender.com/${image}`;

  return (
    <div className={style['product-card']}>
      <Link className={style['product-card__link']} to={productPageLink}>
        <img src={imageLink} className={style['product-card__image']} />
      </Link>

      <Link className={style['product-card__name']} to={productPageLink}>
        {name}
      </Link>

      <p className={style['product-card__price']}>
        <span className={style['product-card__price-discount']}>
          {`$${price}`}
        </span>
        <span className={style['product-card__price-full']}>
          {`$${fullPrice}`}
        </span>
      </p>

      <div className={style['product-card__description']}>
        <p className={style['product-card__description-title']}>
          <span>Screen:</span>
          <span className={style['product-card__description-value']}>
            {screen}
          </span>
        </p>

        <p className={style['product-card__description-title']}>
          <span>Capacity:</span>
          <span className={style['product-card__description-value']}>
            {capacity}
          </span>
        </p>

        <p className={style['product-card__description-title']}>
          <span>RAM:</span>
          <span className={style['product-card__description-value']}>
            {ram}
          </span>
        </p>
      </div>

      <div className={style['product-card__buttons-wrapper']}>
        {/* button below should be separete component */}
        <button
          className={cn(style['add-to-cart-button'], {
            [style['add-to-cart-button--active']]: productAdded,
          })}
          onClick={() => handleAddProduct()}
        >
          {buttonText}
        </button>

        {/* button below should be separete component */}
        <button
          className={cn(style['favourites-add-button'], {
            [style['favourites-add-button--active']]: productFavourite,
          })}
          onClick={() => handleAddFavourite()}
        >
          {productFavourite ? (
            <img src={favouriteheart} />
          ) : (
            <img src={heart} />
          )}
        </button>
      </div>
    </div>
  );
};
