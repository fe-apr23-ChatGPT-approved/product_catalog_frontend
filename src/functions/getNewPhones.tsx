import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { getDiscountModels, getNewModels } from '../api/getProductsFromServer';
import { Product } from '../types/productType';

export const LoadFunctionToProductPage = () => {
  const [newModels, setNewModels] = useState<Product[]>([]);
  const [discountModels, setDiscountModels] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
 
  useEffect(() => {
    setIsLoading(true);
    getNewModels()
      .then((data) => setNewModels(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // load new models from API

  useEffect(() => {
    setIsLoading(true);
    getDiscountModels()
      .then((data) => setDiscountModels(data))
      .catch(() => setIsError(true))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // load discount models from API
};