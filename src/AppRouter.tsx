import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PhonesPage } from './pages/PhonesPage';

import { CartPage } from './pages/CartPage';
import { TabletsPage } from './pages/TabletsPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { NotFoundPage } from './pages/NotFoundPages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductDetails } from './pages/ProductDetails';

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
      {
        index: true,
        element: <HomePage />
      },

      {
        path: '/home',
        element: <Navigate to="/" replace />
      },

      // {
      //   path: 'phones/:phoneId',
      //   element: <ProductPage />,
      // },
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
      //   {
      //     path: '/favourites',
      //     element: <FavouritesPage />
      //   }
    ],
  },
]);
