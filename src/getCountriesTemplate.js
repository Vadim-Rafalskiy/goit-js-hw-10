export const getCountriesTemplate = ({ name, flags: { svg: flag } }) =>
  `<li class="country-item"><img src="${flag}" width="32" height="24"  alt=""></img>
  <span class="list-info">${name}</span></li>`;

export const getCountryTemplate = ({
  capital,
  name,
  population,
  flags: { svg: flag },
  languages,
}) => {
  const langs = languages.map(language => language.name).join(', ');

  return `<div class="name-wrapper"><img src="${flag}" width="32" height="32"  alt=""></img>
  <span class="info-name">${name}</span></div>
  <p><b class="info-label">Capital: </b>${capital}</p>
  <p><b class="info-label">Population: </b>${population}</p>
  <p><b class="info-label">Languages: </b>${langs}</p>`;
};
