'use client';

import { useEffect } from 'react';
import { useCart } from '@/hooks/use-cart';
import Link from 'next/link';

export default function CheckoutSuccess() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Clear cart after successful payment
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8">
          <div className="text-5xl">✅</div>
        </div>
        
        <h1 className="font-display text-5xl font-semibold tracking-tighter mb-4">Płatność przyjęta!</h1>
        <p className="text-xl text-white/70 mb-8">
          Dziękujemy za zakup. Klucz zostanie wysłany na Twój adres email w ciągu 30 sekund.
        </p>

        <Link 
          href="/account/orders" 
          className="inline-block px-10 py-4 rounded-3xl border border-white/20 hover:bg-white/5 transition-all"
        >
          Zobacz swoje zamówienia
        </Link>
      </div>
    </div>
  );
}
