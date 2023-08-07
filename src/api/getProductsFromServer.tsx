const BASE_URL = 'https://gadget-store-api.onrender.com';

function request(url: string) {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

    return response.json();
  });
}

export const getProducts = (url: string) => request(url);

export const getRecommended = (url: string) => getProducts(`${url}/recomended`);
export const getNewModels = () => getProducts('/products/new');
export const getDiscountModels = () => getProducts('/products/discount');

///products/:id/recomended
