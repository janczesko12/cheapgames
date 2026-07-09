'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import Link from 'next/link';

export default function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/70 z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-[#0A0F1C] z-[70] border-l border-white/10 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
              <div>
                <div className="font-display text-3xl font-semibold tracking-tighter">Twój koszyk</div>
                <div className="text-sm text-white/50">{totalItems} produktów</div>
              </div>
              <button onClick={toggleCart} className="p-2 hover:bg-white/5 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-auto p-8 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-6xl mb-4 opacity-30">🛒</div>
                  <p className="text-lg text-white/60">Twój koszyk jest pusty</p>
                  <button onClick={toggleCart} className="mt-6 text-sm text-blue-400 hover:underline">
                    Przeglądaj ofertę
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl bg-zinc-900 flex-shrink-0" />
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium pr-6">{item.name}</div>
                      <div className="text-xs text-white/50 mt-0.5">{item.platform}</div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="font-semibold tabular-nums">{item.price} zł</div>
                        
                        <div className="flex items-center gap-2 bg-white/5 rounded-xl">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-3 py-1 hover:bg-white/10 rounded-l-xl"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 tabular-nums text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 hover:bg-white/10 rounded-r-xl"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => removeItem(item.id)}
                      className="opacity-0 group-hover:opacity-100 text-white/40 hover:text-red-400 transition-all self-start mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-white/10 space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Razem</span>
                  <span className="font-semibold tabular-nums">{totalPrice} zł</span>
                </div>

                <Link href="/checkout" onClick={toggleCart}>
                  <button className="neon-button w-full py-4 rounded-3xl bg-white text-black font-semibold text-lg hover:bg-white/90 active:scale-[0.985] transition-all">
                    Przejdź do płatności
                  </button>
                </Link>
                
                <button 
                  onClick={toggleCart}
                  className="w-full py-4 text-sm text-white/60 hover:text-white transition-colors"
                >
                  Kontynuuj zakupy
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
