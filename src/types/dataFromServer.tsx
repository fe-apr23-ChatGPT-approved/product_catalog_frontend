import { Product } from './productType';

export interface Data {
  rows: Product[];
  count: number;
}

export type DataFromServer<T>= T | Data;
