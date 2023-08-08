import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import { CartPage } from './pages/CartPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { NotFoundPage } from './pages/NotFoundPages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { TabletsPage } from './pages/TabletsPage';
import { ProductDetails } from './pages/ProductDetails';
import { Layout } from './components/Layout/Layout';
// import { ProductDetails } from './pages/ProductDetails';

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

      {
        path: 'phones',
        element: <PhonesPage />,
      },

      {
        path: 'phones/:phoneId',
        element: <ProductDetails />,
      },

      {
        path: '/accessories',
        element: <AccessoriesPage />,
      },

      {
        path: 'accessories/:accessoryId',
        element: <ProductDetails />,
      },

      {
        path: '/tablets',
        element: <TabletsPage />,
      },

      {
        path: 'tablets/:tabletId',
        element: <ProductDetails />,
      },

      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/*',
        element: <NotFoundPage />,
      },
      //   {
      //     path: '/favourites',
      //     element: <FavouritesPage />
      //   }
    ],
  },
]);
