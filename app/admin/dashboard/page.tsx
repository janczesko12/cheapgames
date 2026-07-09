'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Przychód (30 dni)', value: '487 320 zł', change: '+18%' },
  { label: 'Zamówienia', value: '3 842', change: '+24%' },
  { label: 'Nowi użytkownicy', value: '1 274', change: '+11%' },
  { label: 'Konwersja', value: '4.8%', change: '+0.9%' },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="text-blue-400 text-sm tracking-[3px]">PANEL ADMINISTRACYJNY</div>
          <h1 className="font-display text-6xl font-semibold tracking-tighter">Dashboard</h1>
        </div>
        <div className="text-right text-sm text-white/60">
          Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
        </div>
      </div>

      {/* Statystyki */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -4 }}
            className="glass rounded-3xl p-8 border border-white/10"
          >
            <div className="text-sm text-white/60 mb-2">{stat.label}</div>
            <div className="font-display text-5xl font-semibold tracking-tighter tabular-nums">{stat.value}</div>
            <div className="text-emerald-400 text-sm mt-3 font-medium">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Wykresy (placeholder) */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass rounded-3xl p-8 h-96 flex items-center justify-center border border-white/10">
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-20">📈</div>
            <div className="font-medium">Wykres przychodów</div>
            <div className="text-sm text-white/50 mt-1">(integracja z Recharts lub Chart.js)</div>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 h-96 flex items-center justify-center border border-white/10">
          <div className="text-center">
            <div className="text-6xl mb-4 opacity-20">📊</div>
            <div className="font-medium">Najpopularniejsze produkty</div>
          </div>
        </div>
      </div>
    </div>
  );
}
