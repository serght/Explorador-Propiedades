'use client';

interface Props {
  search: string;
  onSearch: (value: string) => void;
  region: string;
  onRegionChange: (value: string) => void;
}

export default function SearchFilter({ search, onSearch, region, onRegionChange }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4">
      <input
        type="text"
        placeholder="Buscar por país"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/2 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
        className="p-2 border border-gray-300 rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Todas las regiones</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
