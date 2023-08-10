import { FC, useEffect, useState, useContext } from 'react';
import style from './ProductDetails.module.scss';
import cn from 'classnames';
import { BackButton } from '../../components/Buttons/BackButton';
import { useLocation } from 'react-router';
import { ProductInterface } from '../../types/oneProductType';
import { Product } from '../../types/productType';
import { CaruselContainer } from '../../components/Carusels/CaruselContainer';
import { ProductDescription } from '../../components/ProductDescription';
import { ProductTechSpecs } from '../../components/ProductTechSpecs';
import { PhotosList } from '../../components/PhotosList';
import { Capacity } from '../../components/Capacity/Capacity';
import { Color } from '../../components/Color';
import { AddToCartButton } from '../../components/Buttons/AddToCartButton';
import { AddToFavoritesButton } from '../../components/Buttons/AddToFavoritesButton';
import { ProductCharacteristics } from '../../components/ProductCharacteristics';
import { getFromServer, getRecommended } from '../../api/getProductsFromServer';
import { FavoritesContext } from '../../components/FavouritesContext/FavouritesContext';
import { ProductContext } from '../../components/cartContext/ProductContext';
import { Loader } from '../../components/Loader';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { scrollToTop } from '../../functions/ScrollToTop';
import { ErrorMessage } from '../../components/ErrorMessage';

export const ProductDetails: FC = () => {
  const { pathname } = useLocation();
  const { addToCart, isInCart } = useContext(ProductContext);
  const { onClickFavorites, isInFavorite } = useContext(FavoritesContext);

  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFavourite, setIsFavourite] = useState(
    product ? isInFavorite(product.id) : false,
  );
  const [isProductInCart, setIsProductInCart] = useState<boolean>(
    product ? isInCart(product.id) : false,
  );
  const canShowLoader = !isError && isLoading;
  const canShowPage = !isError && !isLoading;

  useEffect(() => {
    setIsLoading(true);

    getFromServer(pathname)
      .then((data) => {
        if (isInFavorite(data.id)) {
          setIsFavourite(true);
        } else {
          setIsFavourite(false);
        }
        if (isInCart(data.id)) {
          setIsProductInCart(true);
        } else {
          setIsProductInCart(false);
        }
        setProduct(data);
        scrollToTop();
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
      })
      .catch(() => {
        throw new Error('Unable to load recommmended');
      });
  }, []);

  const handleAddProduct = () => {
    if (product) {
      setIsProductInCart(true);
      getFromServer(`/products/${product.id}`)
        .then((data) => addToCart(data))
        .catch(() => setIsError(true));
    }
  };

  const handleAddFavourite = () => {
    if (product) {
      setIsFavourite(!isFavourite);
      getFromServer(`/products/${product.id}`)
        .then((data) => onClickFavorites(data))
        .catch(() => setIsError(true));
    }
  };

  return (
    <main className={style['product-details']}>
      <div className={style['product-details__layout']}>
        <Breadcrumbs productName={product?.name} />
        <div className={style['product-details__back-btn']}>
          <BackButton />
        </div>

        {isError && (
          <div className={style['products-page__error']}>
            <ErrorMessage />
          </div>
        )}

        {canShowLoader && (
          <div className={style['product-details__loader-container']}>
            <Loader />
          </div>
        )}

        {canShowPage && (
          <>
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
                      productAdded={isProductInCart}
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
          </>
        )}
      </div>

      {canShowPage && (
        <CaruselContainer title={'You may also like'} products={recommended} />
      )}
    </main>
  );
};
