 const BASE_URL = 'https://restcountries.eu/rest/v2/';

function fetchCountries(nameCountry) {
  return fetch(`${BASE_URL}name/${nameCountry}`).then(response => {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });
}

export default { fetchCountries };

