import './css/styles.css';

import { searchBox, countryList, countryInfo } from './js/refs';
import { fetchCountries } from './js/fetchCountries';
import { clearMarkup } from './js/clear';

import { debounce } from 'lodash';
import { Notify } from 'notiflix';

import countriesTemplate from './templates/countries.hbs';
import countryTemplate from './templates/country.hbs';

const DEBOUNCE_DELAY = 300;

function onCountries(evt) {
    const incomingValue = evt.target.value.trim();
    if (evt.target.value) {
        fetchCountries(incomingValue).then(countries =>
            countriesMarkup(countries),
        );
    }
}

function countriesMarkup(countries) {
    clearMarkup();

    if (countries.length === 1) {
        clearMarkup();

        countryInfo.innerHTML = countryTemplate(countries);
        return;
    }
    if (countries.length >= 2 && countries.length <= 10) {
        clearMarkup();

        countryList.innerHTML = countriesTemplate(countries);
        return;
    }
    Notify.info(
        'Too many matches found. Please enter a more specific name.',
    );
    return;
}

searchBox.addEventListener(
    'input',
    debounce(onCountries, DEBOUNCE_DELAY),
);
