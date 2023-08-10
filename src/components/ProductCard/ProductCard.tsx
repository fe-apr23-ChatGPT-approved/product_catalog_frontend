import React, { useContext, useState } from 'react';
import style from './ProductCard.module.scss';
import { Product } from '../../types/productType';
import { Link } from 'react-router-dom';

import { ProductContext } from '../Contexts/cartContext/ProductContext';
import { FavoritesContext } from '../Contexts/FavouritesContext/FavouritesContext';
import { AddToCartButton } from '../Buttons/AddToCartButton';
import { AddToFavoritesButton } from '../Buttons/AddToFavoritesButton';

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToCart, isInCart } = useContext(ProductContext);
  const { onClickFavorites, isInFavorite } = useContext(FavoritesContext);
  const [isProductAdded, setIsProductAdded] = useState(
    isInCart(product.itemId),
  );
  const [isFavourite, setIsFavourite] = useState(isInFavorite(product.itemId));

  const handleAddProduct = () => {
    if (isProductAdded) {
      return;
    }
    addToCart(product);
    setIsProductAdded(true);
  };

  const handleClickFavourite = () => {
    onClickFavorites(product);
    setIsFavourite(!isFavourite);
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
        <p className={style['product-card__name-container']}>
          {name}
        </p>
      </Link>

      <section className={style['product-card__price']}>
        <span className={style['product-card__price-discount']}>
          {`$${price}`}
        </span>

        <span className={style['product-card__price-full']}>
          {`$${fullPrice}`}
        </span>
      </section>

      <section className={style['product-card__description']}>
        <article className={style['product-card__description-title']}>
          <p>Screen:</p>

          <p className={style['product-card__description-value']}>
            {screen}
          </p>
        </article>

        <article className={style['product-card__description-title']}>
          <p>Capacity:</p>

          <p className={style['product-card__description-value']}>
            {capacity}
          </p>
        </article>

        <article className={style['product-card__description-title']}>
          <p>RAM:</p>
          
          <p className={style['product-card__description-value']}>{ram}</p>
        </article>
      </section>

      <section className={style['product-card__buttons-wrapper']}>
        <AddToCartButton
          productAdded={isProductAdded}
          onClick={handleAddProduct}
        />

        <AddToFavoritesButton
          productFavourite={isFavourite}
          onClick={handleClickFavourite}
        />
      </section>
    </div>
  );
};
