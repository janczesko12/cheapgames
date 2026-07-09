# CheapGames.pl - Architektura Projektu (Produkcyjna)

## 1. Ogólna Architektura

### Stack
- **Framework**: Next.js 15 (App Router) + React 19
- **Język**: TypeScript (strict)
- **Stylizacja**: Tailwind CSS 4 + Glassmorphism + Neon
- **Animacje**: Framer Motion (wszystkie microinteractions, parallax, scroll, etc.)
- **Baza danych**: Supabase (PostgreSQL + Auth + Storage)
- **ORM**: Drizzle ORM
- **Stan**: TanStack Query v5 + React Hook Form + Zod
- **Płatności**: Stripe (Checkout + Webhooks)
- **Emaile**: Resend (profesjonalne szablony HTML)
- **UI**: Shadcn/ui (customizowane) + Lucide Icons
- **Walidacja**: Zod + Server Actions

### Zasady Architektury
- Server Components domyślnie
- Server Actions dla mutacji
- Client Components tylko tam, gdzie absolutnie konieczne (interaktywność)
- Oddzielenie: `features/` vs `components/`
- Pełna separacja typów (`types/`)
- Middleware dla auth + rate limiting
- Cache-first (revalidatePath / revalidateTag)

## 2. Struktura Folderów (Finalna)

```
cheapgames/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   ├── register/
│   │   ├── reset-password/
│   │   └── callback/
│   ├── (shop)/
│   │   ├── layout.tsx
│   │   ├── page.tsx                 # Home
│   │   ├── products/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── cart/
│   │   ├── search/
│   │   └── checkout/
│   ├── (account)/
│   │   ├── dashboard/
│   │   ├── orders/
│   │   ├── favorites/
│   │   └── settings/
│   ├── (admin)/
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   ├── products/
│   │   ├── orders/
│   │   ├── users/
│   │   ├── discounts/
│   │   └── newsletter/
│   ├── api/
│   │   ├── webhooks/
│   │   │   └── stripe/
│   │   ├── auth/
│   │   └── search/
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/                  # Shadcn + custom glass/neon
│   ├── shared/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ProductCard.tsx
│   │   ├── CartDrawer.tsx
│   │   └── SearchBar.tsx
│   └── animations/          # Reusable Framer Motion wrappers
├── features/
│   ├── products/
│   ├── cart/
│   ├── auth/
│   ├── admin/
│   ├── checkout/
│   └── newsletter/
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── stripe.ts
│   ├── resend.ts
│   ├── drizzle.ts
│   └── utils.ts
├── db/
│   ├── schema.ts
│   ├── migrations/
│   └── seed.ts
├── actions/
│   ├── products.ts
│   ├── orders.ts
│   ├── auth.ts
│   ├── admin.ts
│   └── newsletter.ts
├── hooks/
│   ├── use-cart.ts
│   ├── use-auth.ts
│   └── use-debounce.ts
├── types/
│   └── index.ts
├── emails/
│   ├── templates/
│   │   ├── welcome.tsx
│   │   ├── order-confirmation.tsx
│   │   └── ...
│   └── send.ts
├── middleware.ts
├── next.config.ts
├── drizzle.config.ts
└── package.json
```

## 3. Baza Danych (Drizzle + Supabase)

Pełny schemat zostanie zdefiniowany w kolejnym etapie.

## 4. Autentykacja

- Supabase Auth (Email + Password + Google + Discord)
- Server-side session via `@supabase/ssr`
- Role: `user | moderator | admin`
- Email verification required

## 5. Płatności

- Stripe Checkout Session
- Webhook handler (order status + supplier email)
- Obsługa wszystkich metod płatności Stripe

## 6. Bezpieczeństwo

- Middleware rate limiting (basic)
- Zod validation na wszystkich inputs
- RLS + Row Level Security w Supabase
- CSRF via Next.js
- Sanitizacja

## 7. Wydajność

- Image Optimization (Next/Image + Supabase Storage)
- Server Components + Streaming
- React Query cache
- Lazy loading + Framer Motion reduced motion support

---

**Etap 1 zakończony.**

Czekam na komendę: **dalej**