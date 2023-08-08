import { FC, useEffect, useState, useContext, useState } from 'react';
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
import { ProductInterface } from '../../types/oneProductType';
import { Capacity } from '../../components/Capacity/Capacity';
import { Color } from '../../components/Color';
import { ProductContext } from '../../components/cartContext/ProductContext';
import { AddToCartButton } from '../../components/AddToCartButton';
import { AddToFavoritesButton } from '../../components/AddToFavoritesButton';
import { ProductCharacteristics } from '../../components/ProductCharacteristics';

type Props = {
  productDetails: ProductInterface;
};

export const ProductDetails: FC<Props> = ({ productDetails }) => {
  const { addToCart } = useContext(ProductContext);
  const [productFavourite, setProductFavourite] = useState(false);
  const [productAdded, setProductAdded] = useState(false);

  const handleAddProduct = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setProductAdded(true);
    addToCart(productDetails);
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

        <section className={style['product-details__main-info']}>
          <div className={style['product-details__photos']}>
            {product && (
              <PhotosList images={product?.images} name={product.name} />
            )}
          </div>
          <div className={style['product-details__variants']}>
            <Color
              productDetailsId={productDetails.id}
              actualColor={productDetails.color}
              colors={productDetails.colorsAvailable}
            />
            <Capacity
              capacities={productDetails.capacityAvailable}
              productDetailsId={productDetails.id}
              actualCapacity={productDetails.capacity}
            />
            <p className={style['product-details__price']}>
              <span className={style['product-details__price-discount']}>
                {`$${productDetails.priceDiscount}`}
              </span>
              <span className={style['product-details__price-full']}>
                {`$${productDetails.priceRegular}`}
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
              screen={productDetails.screen}
              resolution={productDetails.resolution}
              processor={productDetails.processor}
              ram={productDetails.ram}
            />
          </div>
        </div>
        <div className={style['product-details__aditional-info']}>
          <div className={style['product-details__block']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquam, reprehenderit.
          </div>
          <div className={style['product-details__block']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            harum. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Aliquam, reprehenderit.
          </div>
        </div>

        <div className={style['product-details__recommended']}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          deserunt. A ad quibusdam harum voluptatum veritatis fuga, numquam
          autem maxime!
        </div>
      </div>
    </section>
  );
};
