import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ProductPage } from './components/ProductsPage';
import { CartPage } from './pages/CartPage';
// import { NotFoundPage } from './pages/NotFoundPage';
// import { HomePage } from './pages/HomePage/HomePage';

export const AppRouter = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    children: [
      // {
      //   index: true,
      //   element: <HomePage />
      // },

      //   {
      //     path: '/home',
      //     // eslint-disable-next-line react/jsx-curly-brace-presence
      //     element: <Navigate to="/" replace />
      //   },

      {
        path: '/phones',
        element: <ProductPage title="Mobile phones" />
      },

      {
        path: '/tablets',
        element: <ProductPage title="Tablets" />
      },

      {
        path: '/accessories',
        element: <ProductPage title="Accessories" />
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
