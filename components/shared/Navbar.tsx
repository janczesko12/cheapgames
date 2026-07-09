'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { useState } from 'react';

export default function Navbar() {
  const { toggleCart, totalItems } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
            <span className="font-display text-xl font-bold text-black">CG</span>
          </div>
          <div>
            <div className="font-display text-2xl font-semibold tracking-tighter">CheapGames</div>
            <div className="text-[10px] text-white/50 -mt-1">.pl</div>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative group">
            <input
              type="text"
              placeholder="Szukaj gier, oprogramowania..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 focus:border-blue-500/50 rounded-2xl px-5 py-3 pl-12 text-sm placeholder:text-white/40 transition-all"
            />
            <Search className="absolute left-4 top-4 w-4 h-4 text-white/40" />
          </div>
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/products" className="hover:text-blue-400 transition-colors">Oferta</Link>
          <Link href="/#promocje" className="hover:text-blue-400 transition-colors">Promocje</Link>
          <Link href="/#faq" className="hover:text-blue-400 transition-colors">FAQ</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-2xl hover:bg-white/5 transition-all text-sm">
              <User className="w-4 h-4" />
              <span>Logowanie</span>
            </button>
          </Link>

          <button
            onClick={toggleCart}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm relative"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Koszyk</span>
            {totalItems > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-[10px] flex items-center justify-center font-medium">
                {totalItems}
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}