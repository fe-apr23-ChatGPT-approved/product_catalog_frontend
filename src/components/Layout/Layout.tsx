import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Menu } from '../Menu';
import { CarouselSlider } from '../CarouselSlider';

export const Layout: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <Header isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
      {isOpenMenu && <Menu setIsOpenMenu={setIsOpenMenu} />}
      <CarouselSlider />
      <main>
        <Outlet />
      </main>
      {!isOpenMenu && <Footer />}
    </>
  );
};
