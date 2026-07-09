# Struktura Folderów — CheapGames.pl

Projekt jest gotowy do wdrożenia pełnej struktury.

Poniżej znajduje się pełna lista folderów i plików, które będą tworzone etapami:

## Root
- `.env.local` (do uzupełnienia później)
- `drizzle.config.ts`
- `middleware.ts`
- `next.config.ts`

## app/
- `(shop)/` — publiczny sklep
- `(auth)/` — logowanie/rejestracja
- `(account)/` — panel użytkownika
- `(admin)/` — panel administracyjny (chroniony)
- `api/webhooks/stripe/route.ts`
- `layout.tsx` + `globals.css`

## components/
- `ui/` — 20+ komponentów Shadcn + Glass
- `shared/` — Navbar, Footer, ProductCard, CartDrawer, SearchBar
- `animations/` — AnimatedSection, GlowButton, Parallax, etc.

## features/
- `products/`, `cart/`, `auth/`, `checkout/`, `admin/`, `newsletter/`

## db/
- `schema.ts` (kompletny)
- `seed.ts`

## emails/
- `templates/` — 9 profesjonalnych szablonów
- `send.ts`

## actions/, hooks/, lib/, types/

---

**Etap 2 (struktura folderów) zakończony.**

Czekam na komendę: **dalej**