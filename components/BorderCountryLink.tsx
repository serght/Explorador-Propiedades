'use client';

import Link from 'next/link';
import { useState } from 'react';
import Loader from './Loader';

export default function BorderCountryLink({ country }: { country: any }) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white bg-opacity-70 rounded-lg">
          <div className="scale-50"> 
            <Loader />
          </div>
        </div>
      )}
      <Link
        href={`/${encodeURIComponent(country.name.common)}`}
        className="bg-[#C5F5CA] text-black px-4 py-2 rounded-lg text-sm hover:bg-[#b0e6b8] transition-shadow shadow-sm hover:shadow-md block"
        onClick={() => setIsLoading(true)}
      >
        {country.name.common}
      </Link>
    </div>
  );
}