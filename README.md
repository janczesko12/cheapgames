# CheapGames.pl — Premium Sklep z Grami

Profesjonalny, produkcyjnej jakości sklep internetowy zbudowany zgodnie z najwyższymi standardami.

## Stack

- **Next.js 15** + **React 19** + **TypeScript**
- **Tailwind CSS** + Glassmorphism + Neon
- **Framer Motion** (wszystkie animacje)
- **Supabase** (Auth + PostgreSQL + Storage)
- **Drizzle ORM**
- **Stripe** (płatności)
- **Resend** (emaile)
- **TanStack Query** + **Zod** + **React Hook Form**

## Uruchomienie projektu

### 1. Instalacja zależności

```bash
npm install
```

### 2. Konfiguracja środowiska

Uzupełnij plik `.env.local` (już istnieje z Twoimi kluczami).

### 3. Migracje bazy danych

```bash
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 4. Seed danych (opcjonalnie)

```bash
npx tsx db/seed.ts
```

### 5. Uruchomienie

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:3000`

## Dostępne strony

### Publiczne
- `/` — Strona główna (Hero, Promocje, Opinie, FAQ, Newsletter)
- `/products` — Katalog produktów z filtrowaniem i wyszukiwaniem
- `/products/[slug]` — Szczegóły produktu
- `/checkout` — Płatność Stripe

### Autentykacja
- `/login`
- `/register`

### Panel użytkownika
- `/account/dashboard`
- `/account/orders`
- `/account/favorites`
- `/account/settings`

### Panel administracyjny
- `/admin/dashboard`
- `/admin/products`
- `/admin/orders`
- `/admin/discounts`
- `/admin/newsletter`

## Kluczowe funkcje

- ✅ Pełny system koszyka (drawer + stan)
- ✅ Stripe Checkout + Webhook
- ✅ Supabase Auth (Email + Google)
- ✅ System kodów rabatowych
- ✅ Newsletter + kampanie
- ✅ Profesjonalne szablony email
- ✅ Animacje na poziomie Apple/Linear
- ✅ Glassmorphism + Neon
- ✅ Pełna responsywność
- ✅ SEO (meta, sitemap, robots)

## Gotowość produkcyjna

Projekt jest gotowy do wdrożenia po:
1. Utworzeniu tabel w Supabase
2. Skonfigurowaniu webhooka Stripe
3. Dodaniu kluczy OAuth (Google/Discord)
4. Wdrożeniu na Vercel

---

**Projekt stworzony przez Senior Full Stack Developera (Arena.ai)**

Gotowy do uruchomienia po uzupełnieniu `.env.local`.