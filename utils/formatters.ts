import { Country } from '../types/country';

export const formatNumber = (num: number): string =>
  new Intl.NumberFormat().format(num);


export const getNativeName = (country: Country): string =>
  country.name.nativeName
    ? Object.values(country.name.nativeName)[0]?.common || country.name.common
    : country.name.common;


export const formatCurrencies = (
  currencies?: Country['currencies']
): string => {
  if (!currencies) return 'N/A';
  return Object.values(currencies)
    .map((currency) => currency.name)
    .join(', ');
};


export const formatLanguages = (
  languages?: Country['languages']
): string => {
  if (!languages) return 'N/A';
  return Object.values(languages).join(', ');
};
