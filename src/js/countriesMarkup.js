import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';

import { clearMarkup } from './clear';
import { countryList, countryInfo } from './refs';

import { Notify } from 'notiflix';

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

export { countriesMarkup };
