
'use client';

import { useCountries } from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import Loader from '../components/Loader';
import SearchFilter from '../components/SearchFilter';
import { useState } from 'react';
import { Country } from '../types/country';

export default function HomePage() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const filtered = countries.filter((country: Country) => {
    const matchesName = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesName && matchesRegion;
  });

  if (loading) return <Loader />;
  if (error) return <div className="text-red-600 text-center">{error}</div>;

  return (
    <main className="p-4 md:p-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-primary">Explora Propiedades</h1>
      <SearchFilter
        search={search}
        onSearch={setSearch}
        region={region}
        onRegionChange={setRegion}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtered.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </main>
  );
}
