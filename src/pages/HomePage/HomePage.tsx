import { useEffect, useState } from 'react';
import {
  getDiscountModels,
  getNewModels,
} from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { PicturesSlider } from '../../components/PicturesSlider';
import { ShopByCategories } from '../../components/ShopByCategories';
import style from './HomePage.module.scss';
import { CaruselContainer } from '../../components/Carusels/CaruselContainer';
import { Loader } from '../../components/Loader';

export const HomePage: React.FC = () => {
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [discountModels, setDiscountModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNewModels()
      .then((data) => setNewModels(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getDiscountModels()
      .then((data) => setDiscountModels(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className={style['home-page']}>
      <h1 className={style['home-page__title']}>
        Welcome to Nice Gadgets store!
      </h1>

      {isLoading && <Loader />}

      <PicturesSlider />

      <CaruselContainer title="Brand new models" products={newModels} />

      <ShopByCategories />

      <CaruselContainer title="Hot prices" products={discountModels} />
    </main>
  );
};
