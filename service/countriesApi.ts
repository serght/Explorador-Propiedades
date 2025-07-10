const BASE_URL = 'https://restcountries.com/v3.1';

export const getAllCountries = async () => {
  const res = await fetch(
    `${BASE_URL}/all?fields=name,flags,population,region,capital,subregion,currencies,languages,borders,cca3`
  );
  if (!res.ok) throw new Error('Failed to fetch countries');
  return res.json();
};

export const getCountryByName = async (name: string) => {
  const res = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}?fullText=true`);
  if (!res.ok) throw new Error(`Failed to fetch country: ${name}`);
  return res.json();
};

export const getCountriesByCodes = async (codes: string[]) => {
  const res = await fetch(`${BASE_URL}/alpha?codes=${codes.join(',')}`);
  if (!res.ok) throw new Error(`Failed to fetch border countries`);
  return res.json();
};
