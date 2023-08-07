import React from 'react';
import { Navigate, createHashRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PhonesPage } from './pages/PhonesPage';

import { CartPage } from './pages/CartPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { NotFoundPage } from './pages/NotFoundPages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';

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
        element: <PhonesPage />
      },

      {
        path: '/tablets',
        element: <TabletsPage />
      },

      {
        path: '/accessories',
        element: <AccessoriesPage />
      },

      {
        path: '/cart',
        element: <CartPage />
      },

      //   {
      //     path: '/cart',
      //     element: <CartPage />
      //   },

    //   {
    //     path: '/favourites',
    //     element: <FavouritesPage />
    //   }
    ]
  },
]);
