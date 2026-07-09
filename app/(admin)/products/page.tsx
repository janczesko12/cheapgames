'use client';

import { useState } from 'react';

const mockProducts = [
  { id: '1', name: 'Elden Ring', price: 124, platform: 'Steam', sold: 12430, active: true },
  { id: '2', name: 'Cyberpunk 2077', price: 69, platform: 'Steam', sold: 8720, active: true },
  { id: '3', name: 'Baldur\'s Gate 3', price: 159, platform: 'Steam', sold: 5430, active: true },
];

export default function AdminProducts() {
  const [products] = useState(mockProducts);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <div>
          <div className="text-blue-400 text-sm tracking-[3px]">ZARZĄDZANIE</div>
          <h1 className="font-display text-6xl font-semibold tracking-tighter">Produkty</h1>
        </div>
        <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:bg-white/90">
          + Dodaj produkt
        </button>
      </div>

      <div className="glass rounded-3xl overflow-hidden border border-white/10">
        <table className="w-full">
          <thead className="border-b border-white/10 text-left text-sm text-white/60">
            <tr>
              <th className="px-8 py-5 font-medium">Nazwa</th>
              <th className="px-8 py-5 font-medium">Platforma</th>
              <th className="px-8 py-5 font-medium">Cena</th>
              <th className="px-8 py-5 font-medium">Sprzedane</th>
              <th className="px-8 py-5 font-medium">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-white/10 last:border-none hover:bg-white/5">
                <td className="px-8 py-6 font-medium">{product.name}</td>
                <td className="px-8 py-6 text-white/70">{product.platform}</td>
                <td className="px-8 py-6 font-semibold tabular-nums">{product.price} zł</td>
                <td className="px-8 py-6 text-white/70">{product.sold.toLocaleString()}</td>
                <td className="px-8 py-6">
                  <span className="px-3 py-1 rounded-full text-xs bg-emerald-500/10 text-emerald-400">
                    Aktywny
                  </span>
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="text-sm text-white/60 hover:text-white px-4">Edytuj</button>
                  <button className="text-sm text-red-400 hover:text-red-500 px-4">Usuń</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
