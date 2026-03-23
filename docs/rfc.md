# VogueLens AI V2 - Technical RFC

**Author:** Alexandra M.
**Date:** March 4, 2026
**Status:** In Progress — credits system + security hardening implemented
**Target:** Portfolio showcase for Senior/FE Lead roles at AI companies

---

## Executive Summary

VogueLens AI V2 is a complete revamp of the existing fashion AI advisor, adding intelligent shopping companion features, weather-based recommendations, and a robust wardrobe management system. The project showcases modern full-stack architecture, AI integration, and system design thinking.

**Key Differentiators:**

- Shopping companion (upload item while shopping → check wardrobe compatibility)
- Weather-based outfit recommendations
- Visual similarity search using vector embeddings
- AI-powered style analysis and recommendations via OpenAI

---

## 1. System Architecture

### 1.1 High-Level Architecture

```
┌─────────────┐
│   User      │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Next.js 16 Frontend (App Router)  │
│  - React Server Components          │
│  - Client Components (interactive)  │
│  - shadcn/ui + Tailwind             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│         API Routes (App Router)     │
│  /api/wardrobe - CRUD operations    │
│  /api/analyze - Item analysis       │
│  /api/weather - Weather recomm.     │
│  /api/shopping - Shopping check     │
└──────────────┬──────────────────────┘
               │
       ┌───────┴───────┐
       ▼               ▼
┌─────────────┐ ┌─────────────────┐
│  Supabase   │ │  External APIs  │
│  (Postgres) │ │  - OpenAI API   │
│             │ │  - Weather API  │
└─────────────┘ └─────────────────┘
```

### 1.2 Technology Stack

**Frontend:**

- Next.js 16 (App Router, RSC)
- TypeScript 5.x
- Tailwind CSS 4.x
- shadcn/ui components
- Zustand (client state)

**Backend:**

- Next.js API Routes
- Supabase (Postgres, hosted)
- Drizzle ORM + drizzle-kit
- postgres.js driver (`prepare: false` for PgBouncer)

**AI & APIs:**

- OpenAI SDK — GPT-4o (vision + recommendations), text-embedding-3-small
- OpenWeatherMap API
- Supabase Storage (image hosting, `wardrobe-images` bucket)

**Auth:**

- Clerk (SSO + Google only)

**Auth:**

- Clerk (SSO + Google only)

**i18n:**

- next-intl — English (`/en`) and Romanian (`/ro`) with URL-based locale routing

**Rate limiting:**

- Upstash Redis + @upstash/ratelimit — sliding window per IP (middleware) and per user (per route)

**Testing:**

- Jest + React Testing Library (unit)
- Playwright (E2E) — includes security header and API auth checks

**Deployment:**

- Vercel (frontend + API)
- Supabase (database)

---

## 2. Database Design

### 2.1 Schema (Drizzle ORM)

Located at `src/db/schema.ts`:

```typescript
// users table — created lazily on first /api/user/credits call (no Clerk webhook needed)
export const users = pgTable('users', {
  id: text('id').primaryKey(), // Clerk user ID
  email: text('email').unique(), // nullable — populated from Clerk at creation time
  credits: integer('credits').notNull().default(100),
  earlyAccess: boolean('early_access').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// wardrobe_items table
export const wardrobeItems = pgTable('wardrobe_items', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  imageUrl: text('image_url').notNull(),

  // AI-extracted via GPT-4o vision
  category: text('category').notNull(), // top | bottom | shoes | accessories | outerwear
  style: text('style').notNull(), // casual | formal | athletic | bohemian | streetwear | business
  colors: json('colors').$type<string[]>().notNull().default([]), // hex codes
  season: text('season').notNull().default('all'), // spring | summer | fall | winter | all
  occasions: json('occasions').$type<string[]>().notNull().default([]),

  // Similarity search — text-embedding-3-small (1536 dims), stored as JSON
  embedding: json('embedding').$type<number[]>(),

  // User-provided metadata
  brand: text('brand'),
  notes: text('notes'),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

### 2.2 Indexes

```sql
CREATE INDEX idx_wardrobe_user     ON wardrobe_items(user_id);
CREATE INDEX idx_wardrobe_category ON wardrobe_items(category);
CREATE INDEX idx_wardrobe_season   ON wardrobe_items(season);
```

Embeddings are stored as JSON for now. Phase 4 will migrate to native `pgvector` for cosine similarity search.

### 2.3 Why Supabase + Drizzle?

- **Supabase:** Managed Postgres, generous free tier, dashboard, easy branching
- **Drizzle:** Type-safe ORM, SQL-like queries, fast migrations with `drizzle-kit push`
- **postgres.js:** Best driver for Supabase's PgBouncer pooler (`prepare: false` required)

---

## 3. Feature Design

### 3.1 Core Features (Existing)

**Upload & Analyze Item**

- User uploads image
- Extract: category, colors, style, season, occasions
- Generate embedding for similarity search
- Store in DB

**View Wardrobe**

- Grid/list view of all items
- Filter by category, season, color
- Click item → see details + similar items

**Style Recommendations**

- Based on occasion input
- AI suggests outfit combinations from wardrobe

### 3.2 New Feature: Weather-Based Recommendations

**Flow:**

1. User provides location (or detect via IP)
2. Fetch current weather (OpenWeatherMap API)
3. Query wardrobe items matching weather conditions:
   - Temperature → season filter
   - Rain → suggest waterproof/layering
   - Sunny → lighter colors, shorts
4. AI generates outfit recommendation
5. Display with weather context

**API Endpoint:**

```typescript
POST /api/weather-recommend
Body: { location: string } // or lat/lng
Response: {
  weather: { temp, condition, icon },
  outfit: [wardrobe_item_ids],
  reasoning: string // AI explanation
}
```

**Database Query:**

```typescript
// Pseudo-code
const weather = await fetchWeather(location);
const season = mapTempToSeason(weather.temp);

const items = await db.query.wardrobeItems.findMany({
  where: and(
    eq(wardrobeItems.userId, userId),
    eq(wardrobeItems.season, season)
    // additional filters based on weather.condition
  ),
});

const outfit = await generateOutfitWithAI(items, weather);
```

### 3.3 New Feature: Shopping Companion

**Flow:**

1. User uploads image of item while shopping
2. Extract metadata (category, colors, style)
3. Generate embedding for the new item
4. Vector similarity search against existing wardrobe
5. AI analyzes compatibility:
   - "This pairs well with 3 items you own"
   - "You already have 2 similar items"
   - "This fills a gap in your wardrobe"
6. Show recommendation: BUY / SKIP with reasoning

**API Endpoint:**

```typescript
POST /api/shopping-check
Body: {
  image: File | base64,
  context?: string // optional user note
}
Response: {
  item_analysis: { category, colors, style },
  similar_items: [wardrobe_items], // via vector search
  compatibility_score: number, // 0-100
  recommendation: "BUY" | "SKIP" | "CONSIDER",
  reasoning: string,
  pairs_with: [wardrobe_item_ids] // items it matches
}
```

**Implementation:**

```typescript
// Generate embedding for shopping item
const embedding = await generateEmbedding(imageUrl);

// Vector similarity search
const similarItems = await db.execute(sql`
  SELECT *, (image_embedding <=> ${embedding}) as distance
  FROM wardrobe_items
  WHERE user_id = ${userId}
  ORDER BY distance
  LIMIT 10
`);

// AI analysis
const prompt = `
  User is shopping. They're considering this item: ${itemAnalysis}

  Their existing wardrobe contains:
  ${similarItems.map((i) => `- ${i.category}: ${i.colors.join(', ')}, ${i.style}`).join('\n')}

  Analyze:
  1. Do they already own something similar?
  2. Does this fill a gap?
  3. What existing items would it pair well with?
  4. Recommendation: BUY, SKIP, or CONSIDER?

  Respond in JSON: { recommendation, reasoning, pairs_with: [item_ids] }
`;

const result = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [{ role: 'user', content: prompt }],
});
```

---

## 4. AI Integration

### 4.1 OpenAI Configuration

Client lives at `src/lib/openai.ts`:

```typescript
import OpenAI from 'openai';
export const openai = new OpenAI({ apiKey: process.env.NEXT_OPENAI_API_KEY });
```

**Model usage:**

| Task                    | Model                    |
| ----------------------- | ------------------------ |
| Image analysis (vision) | `gpt-4o`                 |
| Style recommendations   | `gpt-4o-mini`            |
| Embeddings              | `text-embedding-3-small` |

**Image analysis pattern (`POST /api/wardrobe`):**

```typescript
const response = await openai.chat.completions.create({
  model: 'gpt-4o',
  messages: [
    {
      role: 'user',
      content: [
        { type: 'image_url', image_url: { url: imageUrl, detail: 'low' } },
        {
          type: 'text',
          text: 'Return JSON: { category, colors, style, season, occasions }',
        },
      ],
    },
  ],
  max_tokens: 300,
});
```

### 4.2 Image Embeddings

Embeddings are generated from a text description of the item (category + style + season + colors + occasions) using `text-embedding-3-small` and stored as JSON in the `embedding` column.

`src/lib/embeddings.ts`:

```typescript
import { openai } from './openai';

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  });
  return response.data[0].embedding; // 1536 dimensions
}
```

**Phase 3 upgrade:** migrate `embedding` column to `vector(1536)` with Supabase's pgvector extension for native cosine similarity search.

### 4.3 Recommendations

Style recommendations use `gpt-4o-mini` with a wardrobe context prompt and `response_format: { type: 'json_object' }` for structured output. See `app/api/wardrobe/recommend/route.ts`.

---

## 5. Frontend Architecture

### 5.1 App Router Structure

```
app/
├── (auth)/
│   ├── sign-in/[[...sign-in]]/page.tsx
│   └── sign-up/[[...sign-up]]/page.tsx
├── (dashboard)/
│   ├── layout.tsx              // Shared dashboard layout
│   ├── wardrobe/
│   │   ├── page.tsx           // Wardrobe grid
│   │   ├── [id]/page.tsx      // Item detail
│   │   └── upload/page.tsx    // Upload new item
│   ├── outfits/
│   │   ├── page.tsx           // Saved outfits
│   │   └── create/page.tsx    // Create outfit
│   ├── recommend/
│   │   ├── weather/page.tsx   // Weather recommendations
│   │   └── occasion/page.tsx  // Occasion recommendations
│   └── shopping/
│       └── check/page.tsx     // Shopping companion
├── api/
│   ├── wardrobe/
│   │   ├── route.ts           // GET (list), POST (create)
│   │   └── [id]/route.ts      // GET, PATCH, DELETE
│   ├── analyze/route.ts       // POST: analyze uploaded image
│   ├── weather/route.ts       // POST: weather recommendations
│   └── shopping/route.ts      // POST: shopping check
├── layout.tsx
└── page.tsx                   // Landing page
```

### 5.2 Component Architecture

**Design System Hierarchy:**

```
src/components/
├── ui/                        // shadcn/ui primitives
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
├── design-system/             // Custom atoms
│   ├── WardrobeItemCard.tsx
│   ├── OutfitDisplay.tsx
│   ├── WeatherWidget.tsx
│   └── ColorPalette.tsx
├── features/                  // Feature-specific composites
│   ├── wardrobe/
│   │   ├── WardrobeGrid.tsx
│   │   ├── ItemUploader.tsx
│   │   └── ItemFilters.tsx
│   ├── recommendations/
│   │   ├── WeatherRecommendation.tsx
│   │   └── OccasionRecommendation.tsx
│   └── shopping/
│       └── ShoppingCheck.tsx
└── layout/                    // Layout components
    ├── DashboardLayout.tsx
    ├── Navbar.tsx
    └── Sidebar.tsx
```

**Wardrobe page (client component — fetches from API):**

```tsx
'use client';
import { supabase, WARDROBE_BUCKET } from '@/lib/supabase';

// Upload flow:
// 1. User picks file → upload to Supabase Storage (wardrobe-images bucket)
// 2. Get public URL → POST to /api/wardrobe → GPT-4o analyzes → saved to DB
// Items displayed in grid with category/season filters
// Recommendation section: input occasion → POST /api/wardrobe/recommend
```

**Drizzle query pattern used in API routes:**

```typescript
import { db } from '@/lib/db';
import { wardrobeItems } from '@/db/schema';
import { eq, desc } from 'drizzle-orm';

// List
const items = await db.select().from(wardrobeItems)
  .where(eq(wardrobeItems.userId, userId))
  .orderBy(desc(wardrobeItems.createdAt));

// Insert + return
const [item] = await db.insert(wardrobeItems).values({ ... }).returning();

// Delete (with ownership check in same query)
await db.delete(wardrobeItems)
  .where(and(eq(wardrobeItems.id, id), eq(wardrobeItems.userId, userId)));
```

### 5.3 State Management

Wardrobe page uses local `useState` for items, filters, and recommendation state — no external state library needed for Phase 2. Zustand is available for future shared state (e.g. wardrobe item count in the nav).

---

## 6. Authentication (Clerk)

### 6.1 Configuration

**Enable only SSO + Google:**

```typescript
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
```

**Clerk Dashboard Settings:**

- Enable: Google OAuth
- Enable: SSO (email link / passkey)
- Disable: Email/password, phone, other OAuth providers

### 6.2 User Metadata

Store minimal user data:

```typescript
// On sign-up, create user record in DB
import { WebhookEvent } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  const event: WebhookEvent = await req.json();

  if (event.type === 'user.created') {
    await db.insert(users).values({
      id: event.data.id,
      email: event.data.email_addresses[0].email_address,
    });
  }

  return new Response('OK');
}
```

---

## 7. Testing Strategy

### 7.1 Unit Tests (Vitest + React Testing Library)

```typescript
// __tests__/components/WardrobeItemCard.test.tsx
import { render, screen } from '@testing-library/react';
import { WardrobeItemCard } from '@/components/design-system/WardrobeItemCard';

describe('WardrobeItemCard', () => {
  it('renders item with image and category', () => {
    const item = {
      id: '1',
      imageUrl: '/test.jpg',
      category: 'top',
      colors: ['#FF0000'],
    };

    render(<WardrobeItemCard item={item} />);

    expect(screen.getByAltText('top')).toBeInTheDocument();
    expect(screen.getByText('top')).toBeInTheDocument();
  });
});
```

### 7.2 E2E Tests (Playwright)

```typescript
// tests/e2e/wardrobe-upload.spec.ts
import { test, expect } from '@playwright/test';

test('user can upload a wardrobe item', async ({ page }) => {
  await page.goto('/wardrobe/upload');

  // Upload image
  await page.setInputFiles('input[type="file"]', 'fixtures/shirt.jpg');

  // Wait for analysis
  await expect(page.locator('text=Analyzing...')).toBeVisible();

  // Check result
  await expect(page.locator('text=Category: top')).toBeVisible();

  // Save item
  await page.click('button:has-text("Add to Wardrobe")');

  // Verify redirect
  await expect(page).toHaveURL('/wardrobe');
  await expect(page.locator('img[alt="top"]')).toBeVisible();
});
```

### 7.3 API Tests

```typescript
// __tests__/api/wardrobe.test.ts
import { POST } from '@/app/api/wardrobe/route';

describe('/api/wardrobe', () => {
  it('creates a wardrobe item', async () => {
    const formData = new FormData();
    formData.append('image', mockFile);

    const request = new Request('http://localhost:3000/api/wardrobe', {
      method: 'POST',
      body: formData,
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(201);
    expect(data.item).toHaveProperty('id');
    expect(data.item.category).toBe('top');
  });
});
```

---

## 8. Performance Optimization

### 8.1 Image Optimization

- Images stored in Supabase Storage (`wardrobe-images` public bucket) — public CDN URLs
- Lazy load images below fold
- Use `priority` for hero images

```tsx
<img
  src={item.imageUrl}
  alt={item.category}
  className="rounded-lg object-cover"
  loading="lazy"
/>
```

### 8.2 Database Query Optimization

- Index on `user_id` + `category` for filtering
- Use `SELECT` only needed fields
- Batch queries with `Promise.all()`
- Cache frequent queries (React Query)

### 8.3 Streaming for Long Responses

- Use Vercel AI SDK streaming for outfit explanations
- Show loading skeleton immediately
- Stream tokens as they arrive

---

## 9. Deployment & DevOps

### 9.1 Environment Variables

```bash
# .env.local

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLERK_WEBHOOK_SECRET=

# Database (Supabase — use the pooler URL, port 6543)
DATABASE_URL=

# OpenAI
NEXT_OPENAI_API_KEY=

# Weather API
OPENWEATHER_API_KEY=

# Supabase Storage
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Upstash Redis (rate limiting)
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### 9.2 Deployment Pipeline

**Vercel:**

- Main branch → Production
- Feature branches → Preview deploys
- Auto-deploy on push

**Database Migrations:**

```bash
# Push schema changes directly to Supabase (dev)
npx drizzle-kit push

# Generate SQL migration files (for review / production)
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 9.3 Monitoring

- Vercel Analytics (Web Vitals)
- Sentry (error tracking)
- OpenAI dashboard (AI usage/costs)
- Supabase dashboard (DB performance, query logs)

---

## 10. Timeline & Milestones

### Phase 1: Foundation (Week 1-2) ✅

- ✅ RFC complete
- ✅ Next.js 16 setup + App Router
- ✅ Drizzle + Supabase setup
- ✅ Clerk auth (SSO + Google)
- ✅ Basic UI with shadcn/ui

### Phase 2: Core Features (Week 3-4) ✅

- ✅ Wardrobe CRUD — `GET/POST /api/wardrobe`, `DELETE /api/wardrobe/[id]`
- ✅ Image analysis via GPT-4o vision (category, colors, style, season, occasions)
- ✅ Embedding generation via text-embedding-3-small, stored as JSON
- ✅ Basic style recommendations — `POST /api/wardrobe/recommend`
- ✅ Supabase Storage upload on wardrobe page (`wardrobe-images` bucket)
- ✅ Category + season filters on wardrobe grid

### Phase 3: New Features (Week 5-6) ✅

- ✅ Weather API integration — OpenWeatherMap 24h forecast (auto-geolocation, 8×3h slots)
- ✅ Weather-based recommendations — `POST /api/wardrobe/weather`, season filter + GPT-4o-mini
- ✅ Shopping companion — `POST /api/wardrobe/shopping-check`, GPT-4o vision + BUY/SKIP/CONSIDER
- ✅ In-memory cosine similarity search on JSON embeddings (top 5 matches)
- ✅ Three-tab wardrobe UI: My Wardrobe / Weather Outfit / Shopping Check

### Phase 4: Polish & pgvector (Week 7-8)

- UI/UX refinement
- Migrate `embedding` column to `vector(1536)` with Supabase pgvector + ivfflat index
- Performance optimization
- Testing (unit + E2E)
- Documentation

---

## 11. Success Metrics

**Technical:**

- < 3s page load (LCP)
- > 90 Lighthouse score
- 80%+ test coverage
- Zero critical bugs in production

**Portfolio Impact:**

- Demonstrates modern full-stack architecture
- Shows AI integration expertise
- Proves system design thinking
- Mobile-responsive, polished UI

**Interview Talking Points:**

- "Built wardrobe AI pipeline: Supabase Storage upload → GPT-4o vision analysis → text-embedding-3-small → Supabase Postgres"
- "Implemented in-memory cosine similarity search on 1536-dim embeddings for shopping companion; planned pgvector migration in Phase 4"
- "Weather feature uses browser Geolocation API → OpenWeatherMap 24h forecast → GPT-4o-mini outfit suggestion filtered by wardrobe season"
- "Shopping companion returns BUY/SKIP/CONSIDER verdict by comparing item embedding against user's wardrobe via cosine similarity + GPT-4o-mini reasoning"
- "Designed type-safe API layer with Drizzle ORM and Supabase Postgres"
- "Integrated OpenAI GPT-4o for image analysis and gpt-4o-mini for outfit recommendations"

---

## 12. Open Questions & Decisions Needed

1. **Image storage:** Cloudinary vs Supabase Storage vs S3?
   - **Decision:** Supabase Storage (no extra service, same credentials, `wardrobe-images` public bucket)

2. **Auth provider:** Clerk vs NextAuth vs Supabase Auth?
   - **Decision:** Clerk (best DX, handles SSO well)

3. **Database:** Neon vs Supabase vs PlanetScale?
   - **Decision:** Supabase (managed Postgres, generous free tier, easy dashboard)

4. **ORM:** Prisma vs Drizzle?
   - **Decision:** Drizzle (type-safe, SQL-like, works with Supabase's PgBouncer pooler)

5. **Embedding model:** OpenAI vs Cohere?
   - **Decision:** OpenAI text-embedding-3-small (1536 dims, cheap, good quality)

6. **Weather API:** OpenWeatherMap vs WeatherAPI?
   - **Decision:** OpenWeatherMap (free tier, simple API)

7. **Deployment:** Vercel vs Railway?
   - **Decision:** Vercel (Next.js native, edge functions, great DX)

---

## 13. Credits System

### 13.1 Design

The first 100 registered users receive **100 free credits** (`earlyAccess: true`). Users beyond that receive 0 credits and see a gate screen. Credits are tracked in the `users` table.

| Action                       | Cost      |
| ---------------------------- | --------- |
| Text AI message              | 1 credit  |
| Image upload (analyze-image) | 5 credits |
| AI image generation (DALL-E) | 5 credits |

### 13.2 User creation flow

Users are created **lazily** — no Clerk webhook required. On the first request to `GET /api/user/credits`:

1. Look up the user by Clerk `userId`
2. If missing: count existing `earlyAccess = true` rows
3. If count < 100 → insert with `credits: 100, earlyAccess: true`
4. If count ≥ 100 → insert with `credits: 0, earlyAccess: false`

### 13.3 Gate screen

`chatbot-interface.tsx` fetches credits on mount. If `earlyAccess === false` it renders a full-screen gate: _"Happy you like VogueLens AI! Register for full features."_ If `earlyAccess === true` but `credits === 0` it shows an out-of-credits message. Credits are updated in real time after every API call using the `creditsRemaining` field returned in API responses.

---

## 14. Security Architecture

### 14.1 Threat model (OWASP Top 10 coverage)

| Threat             | Layer                         | Mechanism                                                                                                                                          |
| ------------------ | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| XSS                | API ingress + React render    | `sanitizeText()` strips `<script>`, `javascript:`, event handlers on all user input; React JSX escapes all output                                  |
| CSRF               | Middleware                    | `Origin` header verified against `Host` on all POST/PUT/PATCH/DELETE API requests                                                                  |
| DDoS / brute force | Middleware (edge) + per-route | Upstash sliding window: 60 req/min/IP globally; 20/min chat, 10/min image, 15/min wardrobe per user                                                |
| Clickjacking       | HTTP headers                  | `X-Frame-Options: DENY`, CSP `frame-ancestors 'none'`                                                                                              |
| MIME sniffing      | HTTP headers                  | `X-Content-Type-Options: nosniff`                                                                                                                  |
| Prompt injection   | API                           | `imageAnalysis` passed as a separate user message (not interpolated into system prompt); system prompt instructs model to ignore override attempts |
| SSRF               | Input validation              | `isPublicHttpsUrl()` blocks RFC-1918 private IPs and localhost on all user-supplied URLs                                                           |
| Info leakage       | Error handlers                | `catch` blocks log only `error.message` server-side; clients receive generic 4xx/5xx responses                                                     |
| Insecure transport | HTTP headers                  | `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`                                                                          |
| LLM output trust   | Wardrobe API                  | All GPT-4o JSON fields whitelist-validated before DB insert                                                                                        |
| File upload abuse  | `/api/analyze-image`          | MIME type whitelist (JPEG/PNG/WebP/GIF), 5 MB size cap                                                                                             |

### 14.2 Input validation (`src/lib/security.ts`)

All mutable API routes validate their request body with Zod schemas before processing:

- `chatSchema` — `prompt` max 2000 chars, optional `imageAnalysis` / `generateImage`
- `wardrobePostSchema` — `imageUrl` must be public HTTPS (no private IPs), `brand` ≤ 100 chars, `notes` ≤ 500 chars

### 14.3 HTTP security headers (`next.config.mjs`)

Applied to all routes via `headers()`:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
Permissions-Policy: camera=(), microphone=(), geolocation=(self), payment=()
Content-Security-Policy: default-src 'self'; frame-ancestors 'none'; object-src 'none'; ...
```

---

## 15. Risks & Mitigation

| Risk                                | Impact | Mitigation                                                  |
| ----------------------------------- | ------ | ----------------------------------------------------------- |
| OpenAI API rate limits              | High   | Implement request queuing + Upstash rate limiting           |
| Supabase connection pool exhaustion | Medium | Use PgBouncer URL (port 6543), `prepare: false`             |
| Image upload abuse                  | High   | Rate limit per user, file size limits, Clerk auth required  |
| AI costs exceed budget              | Medium | gpt-4o-mini for recommendations, gpt-4o only for vision     |
| Vector search slow with many items  | Medium | Migrate to pgvector (Phase 4), add ivfflat index            |
| Geolocation denied by user          | Low    | Weather tab shows "Try again" button with graceful fallback |

---

## 16. Future Enhancements (Post-V2)

- **Virtual try-on:** Use AI to visualize outfits on user
- **Social features:** Share outfits, get community feedback
- **Shopping links:** Affiliate links to buy similar items
- **Trend matching:** "Your wardrobe matches 2026 trends"
- **Sustainability:** Track cost-per-wear, suggest outfit rotation
- **Mobile app:** React Native version

---

## Appendix A: API Specifications

### POST /api/wardrobe

Upload new wardrobe item.

**Request:**

```typescript
Content-Type: application/json

{
  imageUrl: string,  // Supabase Storage public URL (upload happens client-side to wardrobe-images bucket)
  brand?: string,
  notes?: string
}
```

**Response:**

```typescript
{
  item: {
    id: string,
    imageUrl: string,
    category: string,
    colors: string[],
    style: string,
    season: string,
    occasions: string[],
    createdAt: string
  }
}
```

### POST /api/wardrobe/shopping-check

Check if shopping item fits wardrobe.

**Request:**

```typescript
{
  imageUrl: string; // Supabase Storage URL (uploaded to check/${userId}/ prefix)
}
```

**Response:**

```typescript
{
  analysis: {
    category: string,       // top | bottom | shoes | accessories | outerwear
    colors: string[],       // hex codes
    style: string,
    season: string,
    occasions: string[]
  },
  similarItems: {           // top 5 by cosine similarity
    id: string,
    imageUrl: string,
    category: string,
    style: string
  }[],
  compatibilityScore: number,          // 0–100 (best match score × 100)
  recommendation: "BUY" | "SKIP" | "CONSIDER",
  reasoning: string,
  pairsWithIds: string[]               // item IDs that pair well
}
```

### POST /api/wardrobe/weather

Get weather-based outfit recommendation.

**Request:**

```typescript
{
  lat: number,
  lon: number
}
```

**Response:**

```typescript
{
  city: string,
  forecast: {             // 8 slots × 3h = next 24 hours
    time: string,         // "HH:MM"
    temp: number,         // °C
    condition: string,    // weather emoji
    description: string
  }[],
  recommendation: string, // AI outfit suggestion text
  itemIds: string[]        // wardrobe item IDs to highlight
}
```

---

## Appendix B: Database Setup

**Push schema to Supabase:**

```bash
# Set DATABASE_URL in .env.local (use pooler URL, port 6543)
npx drizzle-kit push
```

**Drizzle client (`src/lib/db.ts`):**

```typescript
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '@/db/schema';

// prepare: false required for Supabase PgBouncer
const client = postgres(process.env.DATABASE_URL!, { prepare: false });
export const db = drizzle(client, { schema });
```

**Phase 4: enable pgvector for similarity search**

In Supabase SQL editor:

```sql
CREATE EXTENSION IF NOT EXISTS vector;
ALTER TABLE wardrobe_items ADD COLUMN embedding_vec vector(1536);
CREATE INDEX ON wardrobe_items USING ivfflat (embedding_vec vector_cosine_ops);
```

Then update schema.ts to use `vector('embedding_vec', { dimensions: 1536 })` from `drizzle-orm/pg-core`.

---
