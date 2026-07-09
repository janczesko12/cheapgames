import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  decimal,
  timestamp,
  boolean,
  jsonb,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ==================== ENUMS ====================

export const userRoleEnum = pgEnum('user_role', ['user', 'moderator', 'admin']);
export const orderStatusEnum = pgEnum('order_status', [
  'pending',
  'paid',
  'processing',
  'completed',
  'cancelled',
  'refunded',
]);
export const platformEnum = pgEnum('platform', [
  'Steam',
  'Epic Games',
  'EA App',
  'Battle.net',
  'Ubisoft Connect',
  'Xbox',
  'PlayStation',
  'Nintendo',
  'Minecraft',
  'Roblox',
  'Windows',
  'Office',
  'VPN',
  'Antivirus',
]);
export const activationTypeEnum = pgEnum('activation_type', [
  'key',
  'account',
  'gift_card',
  'subscription',
]);

// ==================== USERS (Supabase Auth extended) ====================

export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey().notNull(), // Supabase auth.users.id
  email: varchar('email', { length: 255 }).notNull().unique(),
  fullName: varchar('full_name', { length: 100 }),
  avatarUrl: text('avatar_url'),
  role: userRoleEnum('role').default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ==================== CATEGORIES ====================

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  icon: varchar('icon', { length: 50 }),
  description: text('description'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== SUPPLIERS ====================

export const suppliers = pgTable('suppliers', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 150 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  apiEndpoint: text('api_endpoint'),
  apiKey: text('api_key'), // encrypted in production
  contactPerson: varchar('contact_person', { length: 100 }),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== PRODUCTS ====================

export const products = pgTable('products', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 200 }).notNull(),
  slug: varchar('slug', { length: 200 }).notNull().unique(),
  description: text('description').notNull(),
  shortDescription: varchar('short_description', { length: 300 }),
  
  // Pricing
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  originalPrice: decimal('original_price', { precision: 10, scale: 2 }),
  discountPercentage: integer('discount_percentage'),
  
  // Metadata
  categoryId: uuid('category_id').references(() => categories.id),
  platform: platformEnum('platform').notNull(),
  region: varchar('region', { length: 50 }).default('Global'),
  language: varchar('language', { length: 50 }).default('Polski / English'),
  activationType: activationTypeEnum('activation_type').notNull(),
  manufacturer: varchar('manufacturer', { length: 100 }),
  
  // Stats
  soldCount: integer('sold_count').default(0).notNull(),
  rating: decimal('rating', { precision: 2, scale: 1 }).default('0.0'),
  reviewCount: integer('review_count').default(0),
  
  // Media
  mainImage: text('main_image').notNull(),
  images: jsonb('images').$type<string[]>().default([]),
  
  // Status
  isActive: boolean('is_active').default(true).notNull(),
  isFeatured: boolean('is_featured').default(false).notNull(),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ==================== SUPPLIER_PRODUCTS ====================

export const supplierProducts = pgTable('supplier_products', {
  id: uuid('id').defaultRandom().primaryKey(),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
  supplierId: uuid('supplier_id').references(() => suppliers.id),
  supplierSku: varchar('supplier_sku', { length: 100 }),
  stock: integer('stock').default(9999),
  costPrice: decimal('cost_price', { precision: 10, scale: 2 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== REVIEWS ====================

export const reviews = pgTable('reviews', {
  id: uuid('id').defaultRandom().primaryKey(),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
  userId: uuid('user_id').references(() => profiles.id),
  rating: integer('rating').notNull(),
  comment: text('comment'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== FAVORITES ====================

export const favorites = pgTable('favorites', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => profiles.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').references(() => products.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== DISCOUNT CODES ====================

export const discountCodes = pgTable('discount_codes', {
  id: uuid('id').defaultRandom().primaryKey(),
  code: varchar('code', { length: 50 }).notNull().unique(),
  type: varchar('type', { length: 20 }).notNull(), // 'percentage' | 'fixed'
  value: decimal('value', { precision: 10, scale: 2 }).notNull(),
  minCartValue: decimal('min_cart_value', { precision: 10, scale: 2 }),
  maxUses: integer('max_uses'),
  usedCount: integer('used_count').default(0),
  expiresAt: timestamp('expires_at'),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== ORDERS ====================

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => profiles.id),
  orderNumber: varchar('order_number', { length: 20 }).notNull().unique(),
  status: orderStatusEnum('status').default('pending').notNull(),
  
  // Financials
  subtotal: decimal('subtotal', { precision: 10, scale: 2 }).notNull(),
  discount: decimal('discount', { precision: 10, scale: 2 }).default('0'),
  total: decimal('total', { precision: 10, scale: 2 }).notNull(),
  
  // Payment
  stripePaymentIntentId: varchar('stripe_payment_intent_id', { length: 255 }),
  stripeSessionId: varchar('stripe_session_id', { length: 255 }),
  
  // Delivery info
  email: varchar('email', { length: 255 }).notNull(),
  
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ==================== ORDER ITEMS ====================

export const orderItems = pgTable('order_items', {
  id: uuid('id').defaultRandom().primaryKey(),
  orderId: uuid('order_id').references(() => orders.id, { onDelete: 'cascade' }),
  productId: uuid('product_id').references(() => products.id),
  productName: varchar('product_name', { length: 200 }).notNull(),
  quantity: integer('quantity').default(1).notNull(),
  unitPrice: decimal('unit_price', { precision: 10, scale: 2 }).notNull(),
  totalPrice: decimal('total_price', { precision: 10, scale: 2 }).notNull(),
});

// ==================== NEWSLETTER ====================

export const newsletterSubscribers = pgTable('newsletter_subscribers', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  isActive: boolean('is_active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const newsletterCampaigns = pgTable('newsletter_campaigns', {
  id: uuid('id').defaultRandom().primaryKey(),
  subject: varchar('subject', { length: 200 }).notNull(),
  htmlContent: text('html_content').notNull(),
  scheduledAt: timestamp('scheduled_at'),
  sentAt: timestamp('sent_at'),
  status: varchar('status', { length: 20 }).default('draft'),
  sentCount: integer('sent_count').default(0),
  openCount: integer('open_count').default(0),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== SETTINGS ====================

export const settings = pgTable('settings', {
  id: uuid('id').defaultRandom().primaryKey(),
  key: varchar('key', { length: 100 }).notNull().unique(),
  value: jsonb('value'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ==================== LOGS ====================

export const logs = pgTable('logs', {
  id: uuid('id').defaultRandom().primaryKey(),
  level: varchar('level', { length: 20 }).notNull(),
  message: text('message').notNull(),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ==================== RELATIONS ====================

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  supplierProducts: many(supplierProducts),
  reviews: many(reviews),
  favorites: many(favorites),
}));

export const ordersRelations = relations(orders, ({ many }) => ({
  items: many(orderItems),
}));