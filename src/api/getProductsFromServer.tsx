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

export const getFromServer = (url: string) => request(url);

export const getRecommended = (url: string) => getFromServer(`${url}/recomended`);
export const getNewModels = () => getFromServer('/products/new');
export const getDiscountModels = () => getFromServer('/products/discount');
