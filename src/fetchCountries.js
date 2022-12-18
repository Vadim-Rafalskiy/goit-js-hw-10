import axios from 'axios';
import { failMessage } from './messages';

axios.defaults.baseURL = 'https://restcountries.com';

export function fetchCountries(name) {
  //
  return axios
    .get(`/v2/name/${name}?fields=capital,name,population,flags,languages`)
    .then(({ data }) => data)
    .catch(() => {
      failMessage();
      return [];
    });
}

// ukraine
