import {
  pgTable,
  text,
  integer,
  boolean,
  json,
  timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id').primaryKey(), // Clerk user ID
  email: text('email').unique(),
  credits: integer('credits').notNull().default(100),
  earlyAccess: boolean('early_access').notNull().default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const wardrobeItems = pgTable('wardrobe_items', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  imageUrl: text('image_url').notNull(),
  category: text('category').notNull(),
  style: text('style').notNull(),
  colors: json('colors').$type<string[]>().notNull().default([]),
  season: text('season').notNull().default('all'),
  occasions: json('occasions').$type<string[]>().notNull().default([]),
  brand: text('brand'),
  notes: text('notes'),
  embedding: json('embedding').$type<number[]>(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type WardrobeItem = typeof wardrobeItems.$inferSelect;
export type NewWardrobeItem = typeof wardrobeItems.$inferInsert;
