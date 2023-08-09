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
import { FavoritesPage } from './pages/FavoritesPage';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
        path: '/product_catalog_frontend',
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
        path: '/favourites',
        element: <FavoritesPage />
      },

      {
        path: '/*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
