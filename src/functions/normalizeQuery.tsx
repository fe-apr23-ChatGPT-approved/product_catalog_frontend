import { translateNormalizeQuery } from './translateNormalizator';

export const normalizeQuery = (data: string) => {
  const splittedQuery = data.toLowerCase().split(' ');
  const normalizedQuery = translateNormalizeQuery(splittedQuery);
  
  return normalizedQuery.join('-');
};
