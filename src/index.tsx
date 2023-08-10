import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import { AppRouter } from './AppRouter';
import { ProductContextProvider } from
  './components/Contexts/cartContext/ProductContextProvider';
import { FavoritesContextProvider } from
  './components/Contexts/FavouritesContext/FavouritesContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <FavoritesContextProvider>
        <RouterProvider router={AppRouter} />
      </FavoritesContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
);
