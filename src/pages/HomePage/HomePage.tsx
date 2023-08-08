
// import { BrandNewModels } from '../../components/BrandNewModels';
import { HotPrices } from '../../components/HotPrices';
import { PicturesSlider } from '../../components/PicturesSlider';
import { ShopByCategories } from '../../components/ShopByCategories';
import style from './HomePage.module.scss';

export const HomePage: React.FC = () => (
  <main className={style['home-page']}>
      
    <h1 className={style['home-page__title']}>
      Welcome to Nice Gadgets store!
    </h1>

    <PicturesSlider />

    {/* <BrandNewModels /> */}

    <ShopByCategories />

    <HotPrices />

  </main>
);
