import './css/styles.css';

import { searchBox } from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import { countriesMarkup } from './js/countriesMarkup';

import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

function onCountries(evt) {
    const incomingValue = evt.target.value.trim();
    if (incomingValue) {
        fetchCountries(incomingValue).then(countries =>
            countriesMarkup(countries),
        );
    }
}
searchBox.addEventListener(
    'input',
    debounce(onCountries, DEBOUNCE_DELAY),
);
