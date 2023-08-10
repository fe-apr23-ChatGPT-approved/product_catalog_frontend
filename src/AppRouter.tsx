import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { ProductDetails } from './pages/ProductDetails';
import { Layout } from './components/Layout/Layout';
import { FavoritesPage } from './pages/FavoritesPage';
import { ProductPageLayout } from './pages/ProductsPageLayout';

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
        element: <HomePage />
      },

      {
        path: 'phones',
        element: <ProductPageLayout title="Mobile phones" />,
      },

      {
        path: 'phones/:phoneId',
        element: <ProductDetails />,
      },

      {
        path: '/accessories',
        element: <ProductPageLayout title="Accessories" />
      },

      {
        path: 'accessories/:accessoryId',
        element: <ProductDetails />,
      },

      {
        path: '/tablets',
        element: <ProductPageLayout title="Tablets" />,
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
