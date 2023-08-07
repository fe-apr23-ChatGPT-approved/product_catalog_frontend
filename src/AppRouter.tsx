import React from 'react';
import { Navigate, createHashRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PhonesPage } from './pages/PhonesPage';

import { CartPage } from './pages/CartPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { NotFoundPage } from './pages/NotFoundPages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductDetails } from './pages/ProductDetails';

export const AppRouter = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },

      {
        path: '/home',
        element: <Navigate to="/" replace />
      },

      {
        path: '/phones',
        element: <PhonesPage />,
        children: [
          {
            path: ':itemId',
            element: <ProductDetails />,
          },
        ],
      },

      {
        path: '/tablets',
        element: <TabletsPage />,
        children: [
          {
            path: ':itemId',
            element: <ProductDetails />,
          },
        ],
      },

      {
        path: '/accessories',
        element: <AccessoriesPage />,
        children: [
          {
            path: ':itemId',
            element: <ProductDetails />,
          },
        ],
      },

      {
        path: '/cart',
        element: <CartPage />,
      },

      //   {
      //     path: '/cart',
      //     element: <CartPage />
      //   },

      //   {
      //     path: '/favourites',
      //     element: <FavouritesPage />
      //   }
    ],
  },
]);
