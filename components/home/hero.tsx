'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0F1C] pt-24 pb-32">

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute left-1/2 top-20 h-[750px] w-[750px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[180px]" />

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />

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

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .6 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2"
            >
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Najlepsze ceny w Polsce od 2021
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .15 }}
              className="mt-8 font-display text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tighter hero-title"
            >
              Najtańsze gry
              <br />
              i oprogramowanie
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .25 }}
              className="mt-8 max-w-xl text-xl text-white/70"
            >
              Kupuj gry Steam, Epic Games, Xbox oraz PlayStation
              w najlepszych cenach z natychmiastową dostawą.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .35 }}
              className="mt-10 flex gap-5"
            >

              <Link href="/products">

                <button className="neon-button rounded-3xl bg-white px-9 py-5 text-lg font-semibold text-black flex items-center gap-3">

                  Kup teraz

                  <ArrowRight size={20} />

                </button>

              </Link>

              <Link href="#popularne">

                <button className="rounded-3xl border border-white/10 px-9 py-5 text-lg hover:bg-white/5 transition">

                  Przeglądaj ofertę

                </button>

              </Link>

            </motion.div>

          </div>

          {/* PRAWA STRONA */}

          <div>

            TU BĘDĄ KARTY

          </div>

        </div>

      </div>

    </section>
  );
}