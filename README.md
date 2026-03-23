# VogueLens AI

VogueLens AI is an intelligent fashion advisor that helps users make better style choices through AI-powered analysis. Upload clothing items, get color palette insights, style recommendations, and build your perfect wardrobe — in English or Romanian.

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC)](https://tailwindcss.com/)

## Features

- AI-powered style analysis and outfit recommendations
- Image upload with Google Cloud Vision analysis
- AI image generation via DALL-E 3
- Virtual wardrobe management with weather-based suggestions
- Shopping compatibility checker
- Credits system — first 100 users get 100 free credits (1 per text message, 5 per image)
- English / Romanian i18n with URL-based locale switching (`/en`, `/ro`)
- Dark / light mode
- Responsive design

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router), TypeScript 5.x |
| Styling | Tailwind CSS 4.x, shadcn/ui, motion/react |
| Auth | Clerk (SSO + Google) |
| AI | OpenAI GPT-4 / GPT-4o, DALL-E 3, Google Cloud Vision |
| Database | Supabase (PostgreSQL), Drizzle ORM |
| Rate limiting | Upstash Redis + @upstash/ratelimit |
| i18n | next-intl |
| Testing | Jest + React Testing Library, Playwright |
| Deployment | Vercel |

## Getting Started

### Prerequisites

```
node >= 18.0.0
npm >= 9.0.0
```

### Installation

```bash
git clone git@github.com:Alexandra2888/VogueLens-AI.git
cd VogueLens-AI
npm install
cp .env.example .env.local   # fill in variables below
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) — redirects to `/en` automatically.

### Environment Variables

```env
# Clerk authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/en/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/en/sign-up

# OpenAI
NEXT_OPENAI_API_KEY=

# Google Cloud Vision (JSON credentials as string)
NEXT_GOOGLE_CLOUD_CREDENTIALS=

# Supabase
DATABASE_URL=

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

> `NEXT_PUBLIC_CLERK_BYPASS_AUTH=true` is injected **only** by Playwright for E2E tests. Never set it in production.

## Project Structure

```
VogueLens-AI/
├── app/                        # Next.js App Router
│   ├── [locale]/               # i18n routes (/en/*, /ro/*)
│   │   ├── (home)/             # Landing page
│   │   ├── chat/               # AI chat
│   │   ├── wardrobe/           # Wardrobe manager
│   │   ├── profile/            # User profile + credits
│   │   ├── privacy/
│   │   └── terms/
│   ├── api/                    # API routes (no locale prefix)
│   │   ├── chat/
│   │   ├── analyze-image/
│   │   ├── wardrobe/
│   │   └── user/credits/
│   └── _components/            # Shared UI components
├── src/
│   ├── db/schema.ts            # Drizzle schema (users, wardrobe_items)
│   ├── lib/
│   │   ├── rate-limit.ts       # Upstash rate limiters
│   │   ├── security.ts         # Zod schemas, sanitization, SSRF guard
│   │   ├── db.ts
│   │   └── openai.ts
│   └── i18n/                   # next-intl routing config
├── messages/
│   ├── en.json                 # English strings
│   └── ro.json                 # Romanian strings
├── tests/e2e/                  # Playwright E2E tests
├── __tests__/                  # Jest unit tests
└── docs/rfc.md                 # Technical RFC
```

## Scripts

```bash
npm run dev          # Development server (webpack)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier
npm run test         # Jest unit tests
npm run test:unit    # Jest (alias)
npm run test:e2e     # Playwright E2E tests
npm run test:e2e:ui  # Playwright with UI
```

## Testing

### Unit tests (Jest)

```bash
npm run test
# or run a single file:
npx jest __tests__/lib/security.test.ts
```

Tests cover:
- `sanitizeText` — XSS/script injection stripping
- `isPublicHttpsUrl` — SSRF prevention
- Zod schemas (`chatSchema`, `wardrobePostSchema`)
- Credit allocation and deduction logic
- `generateChatTitle` utility
- `Message` component rendering

### E2E tests (Playwright)

```bash
# Playwright starts its own dev server with auth bypass enabled automatically
npm run test:e2e
```

Tests cover: home, hero, features, how-it-works, footer, header, theme toggle, terms, privacy, 404, language switcher, chat page, security headers, and API auth/CSRF checks.

> If reusing an existing dev server for E2E tests, add `NEXT_PUBLIC_CLERK_BYPASS_AUTH=true` to `.env.local` and restart it.

## Security

The app is hardened to OWASP Top 10 standards:

| Threat | Mitigation |
|---|---|
| XSS | `sanitizeText()` strips scripts/event handlers on all API input; React JSX escapes all output |
| CSRF | Origin header checked against Host on all mutating API requests (middleware) |
| DDoS / brute force | Upstash sliding-window rate limits at two levels: 60 req/min/IP (middleware), per-user limits per route |
| Clickjacking | `X-Frame-Options: DENY`, CSP `frame-ancestors 'none'` |
| MIME sniffing | `X-Content-Type-Options: nosniff` |
| Prompt injection | User input sanitized; `imageAnalysis` passed as user message, not interpolated into system prompt |
| SSRF | `isPublicHttpsUrl()` blocks private IP ranges on all user-supplied URLs |
| Info leakage | Error handlers never return stack traces; only `error.message` is logged server-side |
| Insecure transport | `Strict-Transport-Security` (1 year, includeSubDomains, preload) |
| LLM output trust | Wardrobe AI response fields are whitelist-validated before hitting the DB |
| File upload abuse | MIME type whitelist + 5 MB size cap on `/api/analyze-image` |

## Credits System

- First 100 registered users receive **100 free credits** (`earlyAccess: true`)
- Users 101+ see a gate screen and receive 0 credits
- Cost: **1 credit** per text message, **5 credits** per image upload or AI image generation
- Balance is displayed on the Profile page; chat is disabled when credits reach 0

## Database

Schema managed with Drizzle ORM. After schema changes:

```bash
npx drizzle-kit push      # push directly (dev/staging)
# or
npx drizzle-kit generate  # generate SQL migration files
npx drizzle-kit migrate   # apply migrations
```

## License

MIT — see [LICENSE](LICENSE).

## Contact

moldovan.alexandra28@gmail.com
