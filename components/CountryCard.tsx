'use client';

import Link from 'next/link';
import { Country } from '../types/country';
import { formatNumber } from '../utils/formatters';

export default function CountryCard({ country }: { country: Country }) {
  return (
    <Link
      href={`/${encodeURIComponent(country.name.common)}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4"
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt || `Bandera de ${country.name.common}`}
        className="w-full h-40 object-cover rounded"
      />
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
        <p><strong>Población:</strong> {formatNumber(country.population)}</p>
        <p><strong>Región:</strong> {country.region}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
      </div>
    </Link>
  );
}
