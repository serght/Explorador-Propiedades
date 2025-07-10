'use client';

import { useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

export default function HomePage() {
  const { countries, loading, error } = useCountries();
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const filtered = countries.filter((country) => {
    const matchesName = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region ? country.region === region : true;
    return matchesName && matchesRegion;
  });

  return (
    <main className="bg-lightBlue min-h-screen px-4 md:px-12 py-8 font-sans text-dark">
      <Navbar />

      <section className="mt-10 mb-10 flex justify-center">
        <SearchFilter
          search={search}
          onSearch={setSearch}
          region={region}
          onRegionChange={setRegion}
        />
      </section>

      {loading && <Loader />}
      {error && <p className="text-red-600 text-center">{error}</p>}
      {!loading && !error && (
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </section>
      )}
    </main>
  );
}
