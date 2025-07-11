'use client';

import Link from 'next/link';
import { Country } from '@/types/country';
import { formatNumber } from '@/utils/formatters';
import { useState } from 'react';
import Loader from './Loader';

export default function CountryCard({ country }: { country: Country }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative group transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-md">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 rounded-2xl">
          <Loader />
        </div>
      )}
      <Link
        href={`/${encodeURIComponent(country.name.common)}`}
        className="bg-white rounded-2xl shadow-sm overflow-hidden block transition-all duration-300 group-hover:ring-2 group-hover:ring-[#083A2B]"
        onClick={handleClick}
      >
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Bandera de ${country.name.common}`}
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
          <p className="text-sm text-grayText"><strong>Población:</strong> {formatNumber(country.population)}</p>
          <p className="text-sm text-grayText"><strong>Región:</strong> {country.region}</p>
          <p className="text-sm text-grayText"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
        </div>
      </Link>
    </div>
  );
}
