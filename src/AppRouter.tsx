import React from 'react';
import { createHashRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
// import { NotFoundPage } from './pages/NotFoundPage';
// import { HomePage } from './pages/HomePage/HomePage';

export const AppRouter = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    // errorElement: <NotFoundPage />,
    // children: [
    //   {
    //     index: true,
    //     element: <HomePage />
    //   },

    //   {
    //     path: '/home',
    //     // eslint-disable-next-line react/jsx-curly-brace-presence
    //     element: <Navigate to="/" replace />
    //   },

    //   {
    //     path: '/phones',
    //     element: <PhonesPage />
    //   },

    //   {
    //     path: '/tablets',
    //     element: <TabletsPage />
    //   },

    //   {
    //     path: '/accessories',
    //     element: <AccessoriesPage />
    //   },

    //   {
    //     path: '/cart',
    //     element: <CartPage />
    //   },

    //   {
    //     path: '/favourites',
    //     element: <FavouritesPage />
    //   }
    // ]
  },
]);
