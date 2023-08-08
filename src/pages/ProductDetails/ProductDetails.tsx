import { FC, useEffect, useState, useContext } from 'react';
import style from './ProductDetails.module.scss';
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
import { ProductContext } from '../../components/cartContext/ProductContext';
import { AddToCartButton } from '../../components/AddToCartButton';
import { AddToFavoritesButton } from '../../components/AddToFavoritesButton';
import { ProductCharacteristics } from '../../components/ProductCharacteristics';

export const ProductDetails: FC = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);
  const { addToCart } = useContext(ProductContext);
  const [productFavourite, setProductFavourite] = useState(false);
  const [productAdded, setProductAdded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFromServer(pathname)
      .then((data) => setProduct(data))
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
    setProductAdded(true);
    addToCart(product);
  };

  const handleAddFavourite = () => {
    setProductFavourite(!productFavourite);
  };

  return (
    <main className={style['product-details']}>
      <div className={style['product-details__layout']}>
        <div className={style['product-details__back-btn']}>
          <BackButton />
        </div>
        
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
                  productAdded={productAdded}
                  onClick={handleAddProduct}
                />
                <AddToFavoritesButton
                  productFavourite={productFavourite}
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
        <div className={style['product-details__aditional-info']}>
          <article className={style['product-details__block']}>
            {product && (
              <ProductDescription description={product.description} />
            )}
          </article>
          <article className={style['product-details__block']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
            deserunt. A ad quibusdam harum voluptatum veritatis fuga, numquam
            autem maxim
          </article>
        </div>

        <CaruselContainer title={'You may also like'} products={recommended} />
      </div>
    </main>
  );
};
