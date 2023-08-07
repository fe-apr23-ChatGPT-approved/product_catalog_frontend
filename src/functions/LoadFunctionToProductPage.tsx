import { useLocation } from 'react-router';
import { ProductInterface } from '../types/oneProductType';
import { useEffect, useState } from 'react';
import { getFromServer } from '../api/getProductsFromServer';

export const LoadFunctionToProductPage = () => {
  const { pathname } = useLocation();
  const [product, setProduct] = useState<ProductInterface | null>(null);

  useEffect(() => {
    // const [category, productId] = pathname.split('/').slice(-2);
    console.log(pathname);

    getFromServer(pathname)
      .then((data) => setProduct(data))
      .catch(() => {
        throw new Error('error');
      });
  }, [pathname]);
};