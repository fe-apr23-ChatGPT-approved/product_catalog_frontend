import { FC, useEffect, useState } from 'react';
import style from './ProductDetails.module.scss';
import { BackButton } from '../../components/BackButton';
import { useLocation } from 'react-router';
import { ProductInterface } from '../../types/oneProductType';
import { getFromServer, getRecommended } from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { CaruselContainer } from '../../components/CaruselContainer';
import { ProductDescription } from '../../components/ProductDescription';

export const ProductDetails: FC = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRecommended, setIsRecommended] = useState(false);

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

  return (
    <main className={style['product-details']}>
      <div className={style['product-details__layout']}>
        <div className={style['product-details__back-btn']}>
          <BackButton />
        </div>
        
        <h2 className={style['product-details__title']}>
          {product?.name}
        </h2>

        <section className={style['product-details__main-info']}>
          <div className={style['product-details__photos']}>
            Photo container
          </div>
          <div className={style['product-details__variants']}>Variants</div>
        </section>
        <section className={style['product-details__aditional-info']}>
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
        </section>

        <CaruselContainer title={'You may also like'} products={recommended} />
      </div>
    </main>
  );
};
