import { useCart } from '@/hooks/use-cart';
import { Star, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elden Ring | CheapGames.pl',
  description: 'Kup Elden Ring najtaniej na Steam. Natychmiastowa dostawa klucza.',
  openGraph: {
    title: 'Elden Ring - Najlepsza cena | CheapGames.pl',
    description: 'Oryginalny klucz Steam. Natychmiastowa dostawa.',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function ProductPage() {
  const { addItem, toggleCart } = useCart();

  const product = {
    id: 'prod_eld',
    name: 'Elden Ring',
    price: 124,
    originalPrice: 189,
    discount: 34,
    platform: 'Steam',
    rating: 4.98,
    reviewCount: 12430,
    sold: 12430,
    description: 'Otwarty świat fantasy stworzony przez FromSoftware. Odkryj świat pełen tajemnic, bossów i epickich bitew.',
    region: 'Global',
    language: 'Polski / English',
    activation: 'Klucz Steam',
    manufacturer: 'FromSoftware',
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      platform: product.platform,
    });
    toggleCart();
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 pb-20">
      <Link href="/products" className="flex items-center gap-2 text-sm text-white/60 hover:text-white mb-8">
        <ArrowLeft className="w-4 h-4" /> Wróć do oferty
      </Link>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Galeria */}
        <div>
          <div className="aspect-video bg-zinc-900 rounded-3xl mb-4 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">🎮</div>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-zinc-800 rounded-2xl" />
            ))}
          </div>
        </div>

        {/* Informacje */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="px-4 py-1 rounded-full bg-white/5 text-xs tracking-widest border border-white/10">
              {product.platform}
            </div>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-current" /> {product.rating} <span className="text-white/40">({product.reviewCount})</span>
            </div>
          </div>

          <h1 className="font-display text-6xl font-semibold tracking-tighter leading-none mb-4">{product.name}</h1>

          <div className="flex items-baseline gap-4 mb-8">
            <div className="text-6xl font-semibold tabular-nums tracking-tighter">{product.price} zł</div>
            <div>
              <div className="text-sm line-through text-white/40">{product.originalPrice} zł</div>
              <div className="text-emerald-400 text-sm font-medium">-{product.discount}%</div>
            </div>
          </div>

          <div className="space-y-6 mb-10">
            <div>
              <div className="text-sm text-white/60 mb-1">Producent</div>
              <div className="font-medium">{product.manufacturer}</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Region / Język</div>
              <div>{product.region} • {product.language}</div>
            </div>
            <div>
              <div className="text-sm text-white/60 mb-1">Aktywacja</div>
              <div>{product.activation}</div>
            </div>
          </div>

          <button 
            onClick={handleAddToCart}
            className="neon-button w-full py-5 rounded-3xl bg-white text-black text-xl font-semibold active:scale-[0.985] transition-all mb-3"
          >
            Dodaj do koszyka — {product.price} zł
          </button>

          <p className="text-center text-xs text-white/40">Natychmiastowa dostawa • 30-dniowa gwarancja</p>
        </div>
      </div>

      {/* Opis */}
      <div className="mt-16 max-w-3xl">
        <h3 className="font-semibold text-xl mb-4">Opis produktu</h3>
        <p className="text-white/80 leading-relaxed text-[15px]">{product.description}</p>
      </div>
    </div>
  );
}
