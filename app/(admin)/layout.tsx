'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/products', label: 'Produkty' },
  { href: '/admin/orders', label: 'Zamówienia' },
  { href: '/admin/users', label: 'Użytkownicy' },
  { href: '/admin/discounts', label: 'Kody rabatowe' },
  { href: '/admin/newsletter', label: 'Newsletter' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0A0F1C]">
      {/* Sidebar */}
      <div className="w-72 border-r border-white/10 p-8">
        <div className="font-display text-3xl font-semibold tracking-tighter mb-12">CheapGames</div>
        
        <div className="space-y-1 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-2xl transition-all ${
                pathname === item.href 
                  ? 'bg-white/10 text-white' 
                  : 'hover:bg-white/5 text-white/70'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-auto pt-12 text-xs text-white/40">
          Panel administracyjny v1.0
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        {children}
      </div>
    </div>
  );
}
