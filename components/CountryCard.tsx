'use client';

import Link from 'next/link';
import { Country } from '@/types/country'
import { formatNumber } from '@/utils/formatters';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/${encodeURIComponent(country.name.common)}`}
      className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt || `Bandera de ${country.name.common}`}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
        <p className="text-sm text-grayText"><strong>Población:</strong> {formatNumber(country.population)}</p>
        <p className="text-sm text-grayText"><strong>Región:</strong> {country.region}</p>
        <p className="text-sm text-grayText"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      </div>
    </Link>
  );
}
