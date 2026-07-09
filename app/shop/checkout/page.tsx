'use client';

import { useCart } from '@/hooks/use-cart';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/navigation';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const router = useRouter();

  const handleCheckout = async () => {
    if (!email) {
      alert('Podaj adres email');
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          email,
          discountCode: discountCode || undefined,
        }),
      });

      const { url } = await res.json();

      if (!url) {
        throw new Error("No checkout URL returned");
      }

      window.location.href = url;
      return;
    } catch (error) {
      console.error(error);
      alert('Błąd podczas tworzenia sesji płatności');
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl mb-4">Twój koszyk jest pusty</p>
          <a href="/products" className="text-blue-400 hover:underline">Wróć do oferty</a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-display text-5xl font-semibold tracking-tighter mb-12">Podsumowanie zamówienia</h1>

      <div className="glass rounded-3xl p-8 mb-8">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between py-4 border-b border-white/10 last:border-none">
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-sm text-white/50">{item.platform} × {item.quantity}</div>
            </div>
            <div className="font-semibold tabular-nums">{(item.price * item.quantity).toFixed(2)} zł</div>
          </div>
        ))}

        <div className="flex justify-between pt-6 text-xl font-semibold">
          <span>Do zapłaty</span>
          <span>{totalPrice} zł</span>
        </div>
      </div>

      {/* Email + Discount */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="text-sm text-white/60 mb-2 block">Adres email (do wysyłki klucza)</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50"
            placeholder="twoj@email.pl"
            required
          />
        </div>

        <div>
          <label className="text-sm text-white/60 mb-2 block">Kod rabatowy (opcjonalnie)</label>
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/50"
            placeholder="PROMO2026"
          />
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="neon-button w-full py-5 rounded-3xl bg-white text-black text-lg font-semibold disabled:opacity-60 active:scale-[0.985] transition-all"
      >
        {isLoading ? 'Przetwarzanie...' : 'Zapłać przez Stripe'}
      </button>

      <p className="text-center text-xs text-white/40 mt-4">
        Bezpieczna płatność obsługiwana przez Stripe • BLIK • Karta • Google Pay
      </p>
    </div>
  );
}
