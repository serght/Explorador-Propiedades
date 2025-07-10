// app/layout.tsx
import '../styles/globals.css'; // Importa Tailwind aquí

export const metadata = {
  title: 'Explorador de Propiedades',
  description: 'App construida con Next.js, React, TypeScript y TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans bg-lightBlue text-dark">{children}</body>
    </html>
  );
}
