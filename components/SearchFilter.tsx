'use client';

interface Props {
  search: string;
  onSearch: (value: string) => void;
  region: string;
  onRegionChange: (value: string) => void;
}

export default function SearchFilter({ search, onSearch, region, onRegionChange }: Props) {
  return (
    <div className="w-full max-w-3xl flex flex-col sm:flex-row gap-3 items-center justify-center">
      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-softGreen outline-none transition text-sm w-full sm:w-64"
      />
      <select
        value={region}
        onChange={(e) => onRegionChange(e.target.value)}
        className="px-4 py-2 rounded-full bg-[#0A3323] text-white text-sm appearance-none w-full sm:w-52"
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
