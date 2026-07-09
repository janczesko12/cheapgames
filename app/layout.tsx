import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import CartDrawer from '@/components/shared/CartDrawer';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const grotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-grotesk',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'CheapGames.pl — Najtańsze gry i oprogramowanie',
    template: '%s | CheapGames.pl',
  },
  description: 'Najlepsze ceny na gry Steam, Epic, Xbox, PlayStation i oprogramowanie. Natychmiastowa dostawa kluczy.',
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-[#0A0F1C] text-white antialiased">
        {children}
        <CartDrawer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}