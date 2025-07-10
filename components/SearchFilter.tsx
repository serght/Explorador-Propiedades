'use client';

interface Props {
  search: string;
  onSearch: (value: string) => void;
  region: string;
  onRegionChange: (value: string) => void;
}

export default function SearchFilter({ search, onSearch, region, onRegionChange }: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
      <select
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
        className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition"
      >
        <option value="">Todas las regiones</option>
        <option value="Africa">África</option>
        <option value="Americas">América</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceanía</option>
      </select>
    </div>
  );
}
