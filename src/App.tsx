import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { NotFoundPage } from './Pages/NotFoundPage';

export const App: React.FC = () => (
  <>
    <NotFoundPage />

    <Footer />
  </>
);
