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
      {/* Input de búsqueda */}
      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-softGreen outline-none transition text-sm w-full sm:w-64"
      />

      {/* Select  */}
      <div className="relative w-full sm:w-52">
        <select
          value={region}
          onChange={(e) => onRegionChange(e.target.value)}
          className="px-4 py-2 rounded-full bg-[#0A3323] text-white text-sm appearance-none w-full pr-10"
        >
          <option value="">Todas las regiones</option>
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
        </select>

        {/* Flecha */}
        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
          <svg
            className="h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
