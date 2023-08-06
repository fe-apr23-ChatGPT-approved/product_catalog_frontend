import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.scss';
import { AppRouter } from './AppRouter';
import {
  ProductContextProvider
} from './components/cartContext/ProductContextProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <RouterProvider router={AppRouter} />
    </ProductContextProvider>
  </React.StrictMode>
);
