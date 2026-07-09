'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import { Search, Filter, ArrowUpDown } from 'lucide-react';

const mockProducts = [
  { id: 1, name: "Elden Ring", price: 124, originalPrice: 189, discount: 34, platform: "Steam", rating: 4.98, sold: 12430, image: "/placeholder-game.jpg" },
  { id: 2, name: "Cyberpunk 2077", price: 69, originalPrice: 199, discount: 65, platform: "Steam", rating: 4.7, sold: 8720, image: "/placeholder-game.jpg" },
  { id: 3, name: "Baldur's Gate 3", price: 159, originalPrice: 229, discount: 30, platform: "Steam", rating: 4.95, sold: 5430, image: "/placeholder-game.jpg" },
  { id: 4, name: "The Witcher 3", price: 29, originalPrice: 79, discount: 63, platform: "GOG", rating: 4.99, sold: 32100, image: "/placeholder-game.jpg" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = mockProducts
    .filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'discount') return b.discount - a.discount;
      return b.sold - a.sold;
    });

  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <div className="text-blue-400 text-sm tracking-[3px] mb-2">WSZYSTKIE PRODUKTY</div>
            <h1 className="font-display text-6xl font-semibold tracking-tighter">Oferta</h1>
          </div>
          
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            {/* Search */}
            <div className="relative w-80">
              <input
                type="text"
                placeholder="Szukaj gry lub oprogramowania..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 pl-11 py-3 rounded-2xl text-sm focus:border-blue-500/50 transition-all"
              />
              <Search className="absolute left-4 top-4 w-4 h-4 text-white/40" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/5 border border-white/10 px-5 py-3 pr-10 rounded-2xl text-sm focus:border-blue-500/50"
              >
                <option value="popular">Najpopularniejsze</option>
                <option value="price-low">Cena: rosnąco</option>
                <option value="price-high">Cena: malejąco</option>
                <option value="discount">Największe rabaty</option>
              </select>
              <ArrowUpDown className="absolute right-4 top-4 w-4 h-4 text-white/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="product-card glass rounded-3xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <div className="h-48 bg-zinc-900 relative">
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full bg-black/70 backdrop-blur">
                  -{product.discount}%
                </div>
                <div className="absolute bottom-4 left-4 text-sm text-white/60">
                  {product.platform}
                </div>
              </div>

              <div className="p-6">
                <div className="font-semibold text-xl tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                  {product.name}
                </div>
                
                <div className="flex items-center gap-2 text-sm mb-4">
                  <span className="text-amber-400">★ {product.rating}</span>
                  <span className="text-white/40">({product.sold.toLocaleString()})</span>
                </div>

                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs line-through text-white/40">{product.originalPrice} zł</span>
                    <div className="text-3xl font-semibold tabular-nums tracking-tighter">{product.price} zł</div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      alert('Dodano do koszyka (demo)');
                    }}
                    className="neon-button px-6 py-2.5 text-sm rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all"
                  >
                    Kup
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-white/50">Brak wyników dla „{searchTerm}”</div>
        )}
      </div>
    </div>
  );
}