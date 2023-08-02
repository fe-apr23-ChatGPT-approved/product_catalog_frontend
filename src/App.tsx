import React, { useState } from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Menu } from './components/Menu';

export const App: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />

      {isOpenMenu && <Menu setIsOpenMenu={setIsOpenMenu} />}

      {!isOpenMenu && <Footer />}
    </>
  );
};
