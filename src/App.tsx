import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NotFoundPage } from './pages/NotFoundPage';
import { HomePage } from './pages/HomePage/HomePage';
import { Phones } from './pages/Phones';
import { Tablets } from './pages/Tablets';
import { Accessories } from './pages/Accessories';
import { Cart } from './pages/Cart';
import { Favourites } from './pages/Favourites';

export const App = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: 'home',
        // eslint-disable-next-line react/jsx-curly-brace-presence
        element: <Navigate to="/" replace />,
      },

      {
        path: 'phones',
        element: <Phones />,
      },
      {
        path: 'tablets',
        element: <Tablets />,
      },
      {
        path: 'accessories',
        element: <Accessories />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'favourites',
        element: <Favourites />,
      },
    ],
  },
]);

export default App;