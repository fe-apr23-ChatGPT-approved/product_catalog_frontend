import './App.scss';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Phone } from './types/Phone';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Phone[]>([]);

  const URL = 'http://localhost:3000/api/phones.json';

  useEffect(() => {
    axios
      .get(URL)
      .then(response => {
        setProducts(response.data);
      });
  }, []);

  console.log(products);

  return (
    <h1>Hello!</h1>
  );
};
