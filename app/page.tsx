'use client';

import { useState } from 'react';
import { useCountries } from '../hooks/useCountries';
import CountryCard from '../components/CountryCard';
import SearchFilter from '../components/SearchFilter';
import Loader from '../components/Loader';
import Image from 'next/image';

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
      {/* Encabezado */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Explora Propiedades</h1>
        <Image src="/logo.svg" alt="Duppla Logo" width={160} height={40} />
      </header>

      {/* Filtros */}
      <section className="bg-white p-4 md:p-6 rounded-2xl shadow-sm mb-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
        <SearchFilter
          search={search}
          onSearch={setSearch}
          region={region}
          onRegionChange={setRegion}
        />
      </section>

      {/* Lista de países */}
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
