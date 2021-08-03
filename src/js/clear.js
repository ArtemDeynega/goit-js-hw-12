import { countryList, countryInfo } from './refs';

function clearMarkup() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
}

export { clearMarkup };
