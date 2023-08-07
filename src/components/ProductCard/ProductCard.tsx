import React, { useContext, useState } from 'react';
import cn from 'classnames';
import style from './ProductCard.module.scss';
import { Product } from '../../types/productType';
import { Link } from 'react-router-dom';

import heart from '../../icons/Add to fovourites.svg';
import favouriteheart from '../../icons/Favourites Filled (Heart Like).svg';
import { ProductContext } from '../cartContext/ProductContext';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const [productAdded, setProductAdded] = useState(false);
  const [productFavourite, setProductFavourite] = useState(false);
  const { addToCart } = useContext(ProductContext);

  const buttonText = productAdded ? 'Added' : 'Add to cart';

  const handleAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setProductAdded(true);
    addToCart(product);
  };

  const handleAddFavourite = () => {
    setProductFavourite(!productFavourite);
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
  const imageLink = `https://gadget-store-api.onrender.com/${image}`;

  return (
    <div className={style['product-card']}>
      <div className={style['product-card__image-container']}>
        <Link to={productPageLink}>
          <img src={imageLink} className={style['product-card__image']} />
        </Link>
      </div>

      <Link className={style['product-card__name']} to={productPageLink}>
        <div className={style['product-card__name-container']}>
          {name}
        </div>
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
          onClick={handleAddProduct}
        >
          {buttonText}
        </button>

        {/* button below should be separete component */}
        <button
          className={cn(style['favourites-add-button'], {
            [style['favourites-add-button--active']]: productFavourite,
          })}
          type="button"
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
