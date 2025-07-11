'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-white rounded-full px-6 py-4 shadow-md w-full max-w-5xl mx-auto mb-8">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </Link>
      <span className="text-3xl font-bold text-[#083A2B] mb-3">Propiedades</span>
    </nav>
  );
}
