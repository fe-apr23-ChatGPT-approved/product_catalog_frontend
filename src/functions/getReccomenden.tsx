import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { getRecommended } from '../api/getProductsFromServer';
import { Product } from '../types/productType';

export const LoadFunctionToProductPage = () => {
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { pathname } = useLocation();
 
  useEffect(() => {
    setIsLoading(true);
    getRecommended(pathname)
      .then((data) => setRecommended(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, [pathname]);
};