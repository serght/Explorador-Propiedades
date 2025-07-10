// app/layout.tsx

import '../styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Explorador de Propiedades',
  description: 'App construida con Next.js, React, TypeScript y TailwindCSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
