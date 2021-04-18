import countryListTpl from '../templates/markup-list.hbs';
import countryCardTpl from '../templates/markup-card.hbs';
import API from './fetchCountries';
import debounce from 'lodash.debounce';

const refs = {
    searchForm: document.querySelector('.input-search'),
    resultContainer: document.querySelector('.result-js')
};

let searchText = '';

refs.searchForm.addEventListener('input', debounce(onSerchInput, 500))

function onSerchInput(e) {
    clearMarkupResult();
    searchText = e.target.value;
    renderMarkupResult(searchText);
};

function createMarcupResult(country) {
    if (country.length === 1) {
    const markupCard = countryCardTpl(country);
    refs.resultContainer.innerHTML = markupCard;
  }
    if (country.length > 1 && country.length < 11) {
    const markupList = countryListTpl(country);
    refs.resultContainer.innerHTML = markupList;
  }
};

function renderMarkupResult(searchText) {
  if (searchText !== '') {
    API.fetchCountries(searchText).then(createMarcupResult);
  }
};

function clearMarkupResult() {
    refs.resultContainer.innerHTML = ''
}