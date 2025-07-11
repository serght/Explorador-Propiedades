import { getCountryByName, getCountriesByCodes } from '../../service/countriesApi';
import { formatNumber, getNativeName, formatCurrencies, formatLanguages } from '../../utils/formatters';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import BorderCountryLink from '../../components/BorderCountryLink';
import Image from 'next/image';
import { Country } from '../../types/country';

interface PageProps {
  params: {
    country: string;
  };
  searchParams?: Record<string, string | string[]>;
}

export default async function CountryPage({ params }: PageProps) {
  const { country: countryParam } = params;

  try {
    const decodedName = decodeURIComponent(countryParam);
    const data = await getCountryByName(decodedName);
    const country = data[0];

    const borders: Country[] = country.borders ? await getCountriesByCodes(country.borders) : [];

    return (
      <main className="bg-lightBlue min-h-screen px-4 md:px-12 py-8 font-sans text-dark">
        <Navbar />

        <Link href="/" className="inline-block mb-6 px-3 py-2 bg-[#083A2B] text-white rounded-full hover:bg-[#97AAFC] transition text-lg w-fit">
          ←
        </Link>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/2 max-w-md h-60 md:h-auto rounded overflow-hidden">
            <Image
              src={country.flags.svg}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              fill
              className="object-cover rounded"
              priority
            />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
            <p className="mb-1"><strong>Nombre nativo:</strong> {getNativeName(country)}</p>
            <p className="mb-1"><strong>Población:</strong> {formatNumber(country.population)}</p>
            <p className="mb-1"><strong>Región:</strong> {country.region}</p>
            <p className="mb-1"><strong>Subregión:</strong> {country.subregion || 'N/A'}</p>
            <p className="mb-1"><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p className="mb-1"><strong>Monedas:</strong> {formatCurrencies(country.currencies)}</p>
            <p className="mb-1"><strong>Idiomas:</strong> {formatLanguages(country.languages)}</p>
          </div>
        </div>

        {borders.length > 0 && (
          <div className="mt-6">
            <h2 className="text-4xl font-bold text-[#083A2B] mb-4">Países fronterizos</h2>
            <div className="flex flex-wrap gap-2">
              {borders.map((border) => (
                <BorderCountryLink key={border.cca3} country={border} />
              ))}
            </div>
          </div>
        )}
      </main>
    );
  } catch {
    return (
      <main className="bg-lightBlue min-h-screen px-4 md:px-12 py-12 text-center font-sans">
        <Navbar />
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-6">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">Error al cargar los datos del país.</h1>
          <p className="text-grayText mb-6">Es posible que el país no exista</p>
          <Link href="/" className="inline-block px-4 py-2 bg-[#6C9FFF] text-white rounded-full hover:bg-[#97AAFC] transition text-lg">
            ←
          </Link>
        </div>
      </main>
    );
  }
}