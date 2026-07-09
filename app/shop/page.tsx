'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/shared/Navbar';
import { ArrowRight, Star, Users, Award, Zap } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { number: '248k', label: 'Sprzedanych kluczy' },
  { number: '4.98', label: 'Średnia ocena' },
  { number: '92k', label: 'Zadowolonych klientów' },
  { number: '1247', label: 'Gier w ofercie' },
];

const categories = [
  { name: 'Steam', count: '842', icon: '🎮' },
  { name: 'Epic Games', count: '319', icon: '🕹️' },
  { name: 'Xbox', count: '187', icon: '🎮' },
  { name: 'PlayStation', count: '156', icon: '🎮' },
];

const reviews = [
  { name: 'Kacper W.', text: 'Najlepsze ceny na rynku. Klucz przyszedł w 12 sekund.', rating: 5 },
  { name: 'Julia M.', text: 'Kupiłam grę dla dziecka — wszystko działa idealnie. Polecam!', rating: 5 },
  { name: 'Michał K.', text: 'Profesjonalna obsługa i świetny support. Będę wracać.', rating: 5 },
];

const faqs = [
  'Jak szybko dostanę klucz?',
  'Czy klucze są oryginalne?',
  'Czy mogę zwrócić grę?',
  'Jakie metody płatności akceptujecie?',
  'Czy wspieracie polskie gry?',
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] overflow-hidden text-white">
      <Navbar />

      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden pt-20 pb-24 bg-[#0A0F1C]">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-1/2 top-20 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />
          <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[160px]" />
          <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[180px]" />
          <div
            className="
              absolute
              inset-0
              opacity-[0.03]
              [background-size:60px_60px]
              [background-image:
              linear-gradient(to_right,white_1px,transparent_1px),
              linear-gradient(to_bottom,white_1px,transparent_1px)]
            "
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1.0, 0.32, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/80">Najlepsze ceny w Polsce od 2021</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                hero-title
                font-display
                text-6xl
                md:text-8xl
                lg:text-9xl
                font-semibold
                tracking-tighter
                leading-[0.9]
                mb-8
                text-white
                max-w-5xl
                mx-auto
              "
            >
              Najtańsze gry
              <br />
              i oprogramowanie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="
                text-xl
                md:text-2xl
                text-white/75
                max-w-2xl
                mx-auto
                mb-12
              "
            >
              Natychmiastowa dostawa. Najlepsze ceny.
              <br />
              Zero kompromisów.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/products"
                className="neon-button group flex items-center justify-center gap-3 px-10 py-4 rounded-3xl bg-white text-black font-semibold text-lg hover:bg-white/90 transition-all active:scale-[0.985]"
              >
                Kup teraz
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition" />
              </Link>

              <Link
                href="#popularne"
                className="flex items-center justify-center gap-3 px-10 py-4 rounded-3xl border border-white/20 hover:bg-white/5 text-lg font-medium transition-all"
              >
                Przeglądaj ofertę
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(#1F2937_0.8px,transparent_1px)] bg-[length:4px_4px] opacity-40" />
      </section>

      {/* ==================== STATS ==================== */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-20">
        <div className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="text-center"
            >
              <div className="font-display text-5xl font-semibold tracking-tighter text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ==================== POPULARNE GRY ==================== */}
      <section id="popularne" className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-blue-400 text-sm font-medium tracking-[3px] mb-2">NAJCZĘŚCIEJ KUPOWANE</div>
            <h2 className="font-display text-5xl font-semibold tracking-tighter">Popularne gry</h2>
          </div>
          <Link href="/products" className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
            Zobacz wszystkie <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <ProductCard key={i} index={i} />
          ))}
        </div>
      </section>

      {/* ==================== KATEGORIE ==================== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="font-display text-4xl font-semibold tracking-tighter mb-8">
          Przeglądaj według platformy
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.015 }}
              className="glass rounded-3xl p-8 group cursor-pointer border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="text-4xl mb-4">{cat.icon}</div>
              <div className="font-semibold text-2xl">{cat.name}</div>
              <div className="text-white/50 text-sm mt-1">{cat.count} produktów</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <div className="border-t border-white/10 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4" /> 100% oryginalne klucze
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" /> Dostawa w 30 sekund
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" /> 92 000+ klientów
          </div>
        </div>
      </div>

      {/* ==================== PROMOCJE ==================== */}
      <section id="promocje" className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-rose-400 text-sm font-medium tracking-[3px] mb-2">LIMITOWANA OFERTA</div>
            <h2 className="font-display text-5xl font-semibold tracking-tighter">Gorące promocje</h2>
          </div>
          <Link href="/products?sort=discount" className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors">
            Wszystkie promocje <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.015 }}
              className="glass rounded-3xl p-8 border border-white/10 hover:border-rose-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-xs px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 w-fit">Do -65%</div>
                  <div className="font-semibold text-2xl mt-3">Cyberpunk 2077</div>
                  <div className="text-white/50 text-sm">CD Projekt RED • Steam</div>
                </div>
                <div className="text-right">
                  <div className="text-xs line-through text-white/40">199 zł</div>
                  <div className="text-4xl font-semibold tabular-nums text-white">69 zł</div>
                </div>
              </div>
              <button className="neon-button w-full py-3.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-sm font-medium transition-all border border-rose-500/20">
                Kup w promocji
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== OPINIE ==================== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <div className="text-blue-400 text-sm tracking-[3px] mb-3">CO MÓWIĄ KLIENCI</div>
          <h2 className="font-display text-5xl font-semibold tracking-tighter">Ponad 92 000 pozytywnych opinii</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="glass rounded-3xl p-8 border border-white/10">
              <div className="flex gap-1 mb-4 text-amber-400">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg leading-snug text-white/90 mb-6">„{review.text}”</p>
              <div className="font-medium">{review.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section id="faq" className="max-w-3xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-semibold tracking-tighter mb-3">
            Najczęściej zadawane pytania
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((question, index) => (
            <details key={index} className="glass rounded-3xl px-8 py-6 border border-white/10 group">
              <summary className="font-medium text-lg cursor-pointer flex justify-between items-center list-none">
                {question}
                <span className="text-white/40 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-4 text-white/70 text-[15px]">
                Klucze wysyłamy automatycznie w ciągu 30 sekund od zaksięgowania płatności. Wszystkie klucze są w 100% oryginalne.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ==================== NEWSLETTER ==================== */}
      <section className="border-t border-white/10 bg-[#0A0F1C]">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-8">
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="font-display text-5xl font-semibold tracking-tighter mb-4">Bądź na bieżąco</h2>
          <p className="text-white/60 text-lg mb-8">Otrzymuj powiadomienia o najlepszych promocjach i nowościach.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Dziękujemy! Zostałeś zapisany do newslettera.');
            }}
            className="flex gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Twój adres email"
              required
              className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-blue-500/60 text-sm placeholder:text-white/40 outline-none"
            />
            <button
              type="submit"
              className="neon-button px-9 rounded-2xl bg-white text-black font-semibold hover:bg-white/90 transition-all"
            >
              Zapisz się
            </button>
          </form>
          <p className="text-xs text-white/40 mt-4">
            Wysyłamy max. 2 maile miesięcznie. Możesz wypisać się w każdej chwili.
          </p>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <div>© {new Date().getFullYear()} CheapGames.pl — Wszystkie prawa zastrzeżone.</div>
          <div className="flex gap-8 mt-4 md:mt-0">
            <Link href="/regulamin">Regulamin</Link>
            <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== PRODUCT CARD COMPONENT ====================
function ProductCard({ index }: { index: number }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="product-card group glass rounded-3xl overflow-hidden border border-white/10 cursor-pointer"
    >
      <div className="relative h-48 bg-[#111827]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 text-xs font-medium backdrop-blur">
          -{35 + index * 3}%
        </div>
        <div className="absolute bottom-4 left-4">
          <div className="text-xs text-white/60">Steam • Global</div>
          <div className="font-semibold text-xl tracking-tight">Elden Ring</div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-semibold">4.98</span>
              <span className="text-xs text-white/40">(1243)</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs line-through text-white/40">189 zł</div>
            <div className="text-2xl font-semibold tabular-nums">124 zł</div>
          </div>
        </div>

        <button className="neon-button mt-5 w-full py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-sm font-medium transition-all">
          Dodaj do koszyka
        </button>
      </div>
    </motion.div>
  );
}