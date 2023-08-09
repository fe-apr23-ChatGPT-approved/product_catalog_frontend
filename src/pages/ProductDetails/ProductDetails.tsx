import { FC, useEffect, useState, useContext } from 'react';
import style from './ProductDetails.module.scss';
import cn from 'classnames';
import { BackButton } from '../../components/BackButton';
import { useLocation } from 'react-router';
import { ProductInterface } from '../../types/oneProductType';
import { getFromServer, getRecommended } from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { CaruselContainer } from '../../components/CaruselContainer';
import { ProductDescription } from '../../components/ProductDescription';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { PhotosList } from '../../components/PhotosList';
import { Capacity } from '../../components/Capacity/Capacity';
import { Color } from '../../components/Color';
// import { ProductContext } from '../../components/cartContext/ProductContext';
import { AddToCartButton } from '../../components/AddToCartButton';
import { AddToFavoritesButton } from '../../components/AddToFavoritesButton';
import { ProductCharacteristics } from '../../components/ProductCharacteristics';
import { FavoritesContext } from '../../components/FavouritesContext/FavouritesContext';
import { Loader } from '../../components/Loader';

export const ProductDetails: FC = () => {
  const { pathname } = useLocation();
  // const { addToCart } = useContext(ProductContext);
  const { onClickFavorites, isInFavorite } = useContext(FavoritesContext);
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFromServer(pathname)
      .then((data) => {
        setProduct(data);
        setIsFavourite(isInFavorite(data.id));
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pathname]);

  useEffect(() => {
    const [category] = location.pathname.split('/').slice(-2, -1);
    getRecommended(category.toString())
      .then((data) => {
        setRecommended(data);
        setIsRecommended(true);
      })
      .catch(() => setIsRecommended(false));
  }, []);

  const handleAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsInCart(true);
    // addToCart(product);
  };

  const handleAddFavourite = () => {
    setIsFavourite(!isFavourite);
    // onClickFavorites(product);
  };

  return (
    <main className={style['product-details']}>
      <div className={style['product-details__layout']}>
        <div className={style['product-details__back-btn']}>
          <BackButton />
        </div>

        {isLoading && (
          <div className={style['product-details__loader-container']}>
            <Loader />
          </div>
        )}

        <h2 className={style['product-details__title']}>
          {product && product.name}
        </h2>

        {product && (
          <section className={style['product-details__main-info']}>
            <div className={style['product-details__photos']}>
              {product && (
                <PhotosList images={product?.images} name={product.name} />
              )}
            </div>

            <div className={style['product-details__variants']}>
              <Color
                productDetailsId={product.id}
                colors={product.colorsAvailable}
              />
              <Capacity
                capacities={product.capacityAvailable}
                productDetailsId={product.id}
              />
              <p className={style['product-details__price']}>
                <span className={style['product-details__price-discount']}>
                  {`$${product.priceDiscount}`}
                </span>
                <span className={style['product-details__price-full']}>
                  {`$${product.priceRegular}`}
                </span>
              </p>
              <div className={style['product-details__buttons-wrapper']}>
                <AddToCartButton
                  productAdded={isInCart}
                  onClick={handleAddProduct}
                />
                <AddToFavoritesButton
                  productFavourite={isFavourite}
                  onClick={handleAddFavourite}
                />
              </div>
              <ProductCharacteristics
                screen={product.screen}
                resolution={product.resolution}
                processor={product.processor}
                ram={product.ram}
              />
            </div>
          </section>
        )}

        <section className={style['product-details__aditional-info']}>
          <article
            className={cn(
              style['product-details__block'],
              style['product-details__description'],
            )}
          >
            {product && (
              <ProductDescription description={product.description} />
            )}
          </article>

          <article
            className={cn(
              style['product-details__block'],
              style['product-details__techSpecs'],
            )}
          >
            {product && <ProductTechSpecs product={product} />}
          </article>
        </section>

        <CaruselContainer title={'You may also like'} products={recommended} />
      </div>
    </main>
  );
};
