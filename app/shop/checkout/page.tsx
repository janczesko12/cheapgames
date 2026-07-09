'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { number: '248k', label: 'Sprzedanych kluczy' },
  { number: '4.98', label: 'Średnia ocena' },
  { number: '92k', label: 'Zadowolonych klientów' },
  { number: '1 247', label: 'Gier w ofercie' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative pt-20 pb-24 bg-[#0A0F1C]">
        <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-6 text-sm text-white">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Najlepsze ceny w Polsce od 2021
          </div>

          <h1 className="font-display text-7xl md:text-8xl font-semibold tracking-tighter leading-none mb-6 text-white">
            Najtańsze gry<br />i oprogramowanie
          </h1>
          
          <p className="text-2xl text-white/80 max-w-md mx-auto mb-10">
            Natychmiastowa dostawa. Najlepsze ceny.<br />Zero kompromisów.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products">
              <button className="neon-button px-10 py-4 rounded-3xl bg-white text-black font-semibold text-lg flex items-center gap-3 hover:bg-white/90">
                Kup teraz <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href="#popularne">
              <button className="px-10 py-4 rounded-3xl border border-white/20 hover:bg-white/5 text-lg font-medium text-white">
                Przeglądaj ofertę
              </button>
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 border border-white/10">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-5xl font-semibold tracking-tighter text-white">{stat.number}</div>
              <div className="text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== POPULARNE GRY ==================== */}
      <section id="popularne" className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="text-blue-400 text-xs tracking-[3px] mb-1">NAJCZĘŚCIEJ KUPOWANE</div>
            <h2 className="font-display text-5xl font-semibold tracking-tighter text-white">Popularne gry</h2>
          </div>
          <Link href="/products" className="text-sm flex items-center gap-1 text-blue-400 hover:underline">
            Zobacz wszystkie <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1,2,3,4].map((i) => (
            <ProductCard key={i} index={i} />
          ))}
        </div>
      </section>

      {/* ==================== KATEGORIE ==================== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="font-display text-4xl font-semibold tracking-tighter mb-8">Przeglądaj według platformy</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Steam', count: 842 },
            { name: 'Epic Games', count: 319 },
            { name: 'Xbox', count: 187 },
            { name: 'PlayStation', count: 156 },
          ].map((cat, i) => (
            <div key={i} className="glass p-8 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all cursor-pointer">
              <div className="text-4xl mb-6">🎮</div>
              <div className="font-semibold text-2xl">{cat.name}</div>
              <div className="text-white/50 text-sm mt-1">{cat.count} produktów</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/10 py-12 px-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} CheapGames.pl — Wszystkie prawa zastrzeżone.
      </footer>
    </div>
  );
}

function ProductCard({ index }: { index: number }) {
  const games = [
    { name: "Elden Ring", price: 124, original: 189, discount: 34 },
    { name: "Cyberpunk 2077", price: 69, original: 199, discount: 65 },
    { name: "Baldur's Gate 3", price: 159, original: 229, discount: 30 },
    { name: "The Witcher 3", price: 29, original: 79, discount: 63 },
  ];
  const game = games[index - 1];

  return (
    <div className="group glass rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all">
      {/* Obrazek */}
      <div className="h-48 bg-zinc-900 relative flex items-center justify-center">
        <div className="text-[110px] opacity-10">🎮</div>
        
        <div className="absolute top-4 right-4 bg-black/70 text-xs px-3 py-1 rounded-full border border-white/10">
          -{game.discount}%
        </div>
        
        <div className="absolute bottom-4 left-4">
          <div className="text-xs text-white/60">Steam • Global</div>
          <div className="font-semibold text-xl tracking-tight">{game.name}</div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-end">
          <div>
            <div className="flex items-center gap-1 text-amber-400 text-sm">
              <Star className="w-4 h-4 fill-current" /> 4.98 <span className="text-white/40">(1.2k)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs line-through text-white/40">{game.original} zł</div>
            <div className="text-3xl font-semibold tabular-nums tracking-tighter">{game.price} zł</div>
          </div>
        </div>

        <button className="mt-6 w-full py-3.5 rounded-2xl border border-white/20 hover:bg-white/10 text-sm font-medium transition-all">
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
}
