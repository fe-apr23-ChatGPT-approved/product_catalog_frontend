import { useEffect, useState } from 'react';
import {
  getDiscountModels,
  getFromServer,
  getNewModels,
} from '../../api/getProductsFromServer';
import { Product } from '../../types/productType';
import { PicturesSlider } from '../../components/PicturesSlider';
import { ShopByCategories } from '../../components/ShopByCategories';
import style from './HomePage.module.scss';
import { CaruselContainer } from '../../components/Carusels/CaruselContainer';
import { Loader } from '../../components/Loader';
import { ErrorMessage } from '../../components/ErrorMessage';

export const HomePage: React.FC = () => {
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [discountModels, setDiscountModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [totalPhones, setTotalPhones] = useState(0);
  const [totalTablets, setTotalTablets] = useState(0);
  const [totalAccessories, setTotalAccessories] = useState(0);
  const canShowLoader = !isError && isLoading;
  const canShowPage = !isError && !isLoading;

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
    getFromServer('/phones')
      .then((data) => setTotalPhones(data.count))
      .catch(() => setIsError(true));
  }, []);

  useEffect(() => {
    getFromServer('/tablets')
      .then((data) => setTotalTablets(data.count))
      .catch(() => setIsError(true));
  }, []);

  useEffect(() => {
    getFromServer('/accessories')
      .then((data) => setTotalAccessories(data.count))
      .catch(() => setIsError(true));
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
      
      {isError && (
        <div className={style['products-page__error']}>
          <ErrorMessage />
        </div>
      )}

      {canShowLoader && <Loader />}

      {canShowPage && (
        <>
          <PicturesSlider />

          <CaruselContainer title="Brand new models" products={newModels} />

          <ShopByCategories
            totalPhones={totalPhones}
            totalTablets={totalTablets}
            totalAccessories={totalAccessories}
          />

          <CaruselContainer title="Hot prices" products={discountModels} />
        </>
      )}
    </main>
  );
};
