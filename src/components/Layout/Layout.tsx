import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
// import { Header } from './Header';

export const Layout: FC = () => (
  <>
    {/* <Header /> */}
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);
