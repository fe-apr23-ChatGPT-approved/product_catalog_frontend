import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { ProductCard } from './components/ProductCard';

export const App: React.FC = () => (
  <>
    <ProductCard />
    <Footer />
  </>
);
