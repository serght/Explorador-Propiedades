import Link from 'next/link'
import Image from 'next/image'
import { Country } from '@/types/country'

interface CountryDetailProps {
  country: Country
  borderCountries: Country[]
}

export default function CountryDetail({ country, borderCountries }: CountryDetailProps) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <Link 
        href="/" 
        className="inline-flex items-center px-4 py-2 bg-white shadow-sm rounded-md mb-8 hover:bg-gray-50 transition-colors"
      >
        ← Volver
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={country.flags.png}
            alt={`Bandera de ${country.name.common}`}
            fill
            className="object-contain rounded-lg shadow-md"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-dark">{country.name.common}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Nombre oficial:</span> {country.name.official}
              </p>
              <p><span className="font-semibold">Población:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Región:</span> {country.region}</p>
              <p><span className="font-semibold">Subregión:</span> {country.subregion || 'N/A'}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
            </div>
            
            <div className="space-y-2">
              <p>
                <span className="font-semibold">Moneda:</span> {
                  country.currencies ? 
                    Object.values(country.currencies).map(c => c.name).join(', ') : 
                    'N/A'
                }
              </p>
              <p>
                <span className="font-semibold">Idiomas:</span> {
                  country.languages ? 
                    Object.values(country.languages).join(', ') : 
                    'N/A'
                }
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="pt-4">
              <h3 className="font-semibold mb-2">Países fronterizos:</h3>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((border) => (
                  <Link
                    key={border.cca3}
                    href={`/${encodeURIComponent(border.name.common)}`}
                    className="px-3 py-1 bg-white shadow-sm rounded-md hover:bg-gray-50 transition-colors"
                  >
                    {border.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}