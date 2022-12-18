import './css/styles.css';
import { failMessage, infoMessage } from './messages';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import {
  getCountriesTemplate,
  getCountryTemplate,
} from './getCountriesTemplate';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchInput: document.querySelector('#search-box'),
  list: document.querySelector('.country-list'),
  aboutCountry: document.querySelector('.country-info'),
};

let countries = [];

refs.searchInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const country = e.target.value.trim();

  fetchCountries(country).then(foundCountries => {
    countries = foundCountries;
    console.log(countries);
    render();
  });
}

const render = () => {
  const countCountries = countries.length;

  refs.list.innerHTML = '';
  refs.aboutCountry.innerHTML = '';

  // if (!countCountries) {
  //   failMessage();
  // } else
  if (countCountries === 1) {
    const about = countries.map(getCountryTemplate);
    refs.aboutCountry.insertAdjacentHTML('beforeend', about);
  } else if (countCountries > 1 && countCountries < 10) {
    const list = countries.map(getCountriesTemplate);
    refs.list.insertAdjacentHTML('beforeend', list.join(''));
  } else if (countCountries >= 10) {
    infoMessage();
  }
};

// function fetchCountries(name) {}
