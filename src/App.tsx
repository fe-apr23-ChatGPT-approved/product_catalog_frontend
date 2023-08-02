import React from 'react';
import './App.scss';

import { Footer } from './components/Footer';
import { PageTitle } from './components/PageTitle';
import { Baner } from './components/Baner';
import { BrandNewModels } from './components/BrandNewModels';
import { ShopByCategories } from './components/ShopByCategories';
import { HotPrices } from './components/HotPrices';

export const App: React.FC = () => (
  <>
    
    <PageTitle />

    <Baner />

    <BrandNewModels />

    <ShopByCategories />

    <HotPrices />

    {/* <NotFoundPage /> */}

    <Footer />

  </>
);
