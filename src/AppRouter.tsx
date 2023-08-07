import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PhonesPage } from './pages/PhonesPage';

import { CartPage } from './pages/CartPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { NotFoundPage } from './pages/NotFoundPages/NotFoundPage';
// import { HomePage } from './pages/HomePage/HomePage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
  
      {
        path: 'phones',
        element: <PhonesPage />,
      },

      // {
      //   path: 'phones/:phoneId',
      //   element: <ProductPage />,
      // },

      {
        path: '/tablets',
        element: <TabletsPage />,
      },

      {
        path: '/accessories',
        element: <AccessoriesPage />,
      },

      {
        path: '/cart',
        element: <CartPage />,
      },
      
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
