// app/[country]/page.tsx
import { getCountryByName, getCountriesByCodes } from '../../service/countriesApi';
import { formatNumber, getNativeName, formatCurrencies, formatLanguages } from '../../utils/formatters';
import Link from 'next/link';

export default async function CountryPage({ params }: { params: { country: string } }) {
  try {
    const data = await getCountryByName(params.country);
    const country = data[0];
    const borders = country.borders
      ? await getCountriesByCodes(country.borders)
      : [];

    return (
      <main className="max-w-4xl mx-auto p-4">
        <Link href="/" className="text-primary underline mb-4 inline-block">← Volver</Link>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={country.flags.svg} alt={country.flags.alt} className="w-full md:w-1/2 rounded" />
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">{country.name.common}</h1>
            <p><strong>Nombre nativo:</strong> {getNativeName(country)}</p>
            <p><strong>Población:</strong> {formatNumber(country.population)}</p>
            <p><strong>Región:</strong> {country.region}</p>
            <p><strong>Subregión:</strong> {country.subregion || 'N/A'}</p>
            <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            <p><strong>Monedas:</strong> {formatCurrencies(country.currencies)}</p>
            <p><strong>Idiomas:</strong> {formatLanguages(country.languages)}</p>

            {borders.length > 0 && (
              <div className="mt-4">
                <strong>Países fronterizos:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {borders.map((border: any) => (
                    <Link key={border.cca3} href={`/${border.name.common}`} className="px-3 py-1 bg-secondary text-white rounded hover:bg-primary transition">
                      {border.name.common}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (e) {
    return <div className="text-red-600 p-4">Error al cargar el país.</div>;
  }
}
