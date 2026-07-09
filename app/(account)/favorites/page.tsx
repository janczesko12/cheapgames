'use client';

import { useState } from 'react';

const mockFavorites = [
  { id: '1', name: 'Elden Ring', price: 124, platform: 'Steam' },
  { id: '2', name: 'Baldur\'s Gate 3', price: 159, platform: 'Steam' },
];

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState(mockFavorites);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(f => f.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-display text-5xl font-semibold tracking-tighter mb-10">Ulubione produkty</h1>

      {favorites.length === 0 ? (
        <div className="text-center py-20 text-white/60">Nie masz jeszcze żadnych ulubionych produktów.</div>
      ) : (
        <div className="space-y-4">
          {favorites.map((product) => (
            <div key={product.id} className="glass rounded-3xl px-8 py-6 flex items-center justify-between border border-white/10">
              <div>
                <div className="font-semibold text-xl">{product.name}</div>
                <div className="text-sm text-white/50">{product.platform}</div>
              </div>
              <div className="flex items-center gap-6">
                <div className="font-semibold tabular-nums text-xl">{product.price} zł</div>
                <button 
                  onClick={() => removeFavorite(product.id)}
                  className="text-red-400 hover:text-red-500 text-sm"
                >
                  Usuń
                </button>
                <button className="px-8 py-3 rounded-2xl bg-white text-black text-sm font-semibold">
                  Dodaj do koszyka
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
