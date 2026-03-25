import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { relations } from 'drizzle-orm';

// Builds (ej: "Yordle 8 Reroll", "Bruiser Tank", etc.)
export const builds = sqliteTable('builds', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  set: text('set').notNull().default('16'),
  description: text('description'),
  notes: text('notes'),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull().default(new Date().toISOString()),
  updatedAt: text('updated_at').notNull().default(new Date().toISOString()),
});

// Traits activos en una build (ej: Yordle 8, Bruiser 2)
export const buildTraits = sqliteTable('build_traits', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  buildId: integer('build_id').notNull().references(() => builds.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  count: integer('count').notNull(),
  type: text('type').notNull(), // 'yordle' | 'gold'
  highlighted: integer('highlighted', { mode: 'boolean' }).default(false),
});

// Campeones en una build
export const buildChampions = sqliteTable('build_champions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  buildId: integer('build_id').notNull().references(() => builds.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  cost: integer('cost').notNull(),
  role: text('role').notNull(),        // 'carry' | 'unlock' | 'default'
  portraitVariant: text('portrait_variant').notNull().default('default'), // 'carry' | 'unlock' | 'default'
  roleIcon: text('role_icon'),
  roleLabel: text('role_label'),
  roleStyle: text('role_style'),       // 'carry' | 'ap' | 'tank' | 'flex'
  priority: integer('priority').default(3), // 1-5
  note: text('note'),
  tags: text('tags').notNull().default('[]'), // JSON: [{label, type}]
  image: text('image').notNull(),
  position: integer('position').default(0),
});

// Items de cada campeón en una build
export const buildChampionItems = sqliteTable('build_champion_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  buildChampionId: integer('build_champion_id').notNull().references(() => buildChampions.id, { onDelete: 'cascade' }),
  itemName: text('item_name').notNull(),
  itemImage: text('item_image').notNull(),
  slot: integer('slot').notNull(), // 1, 2, 3
});

// Augments recomendados para una build
export const buildAugments = sqliteTable('build_augments', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  buildId: integer('build_id').notNull().references(() => builds.id, { onDelete: 'cascade' }),
  name: text('name').notNull(),
  tier: text('tier').notNull(), // 'prismatic' | 'gold' | 'silver'
  description: text('description'),
  icon: text('icon'),
});

// Tips / notas de juego para una build
export const buildTips = sqliteTable('build_tips', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  buildId: integer('build_id').notNull().references(() => builds.id, { onDelete: 'cascade' }),
  icon: text('icon'),
  text: text('text').notNull(),
  position: integer('position').default(0),
});

// Relaciones
export const buildChampionsRelations = relations(buildChampions, ({ many }) => ({
  items: many(buildChampionItems),
}));

export const buildChampionItemsRelations = relations(buildChampionItems, ({ one }) => ({
  champion: one(buildChampions, {
    fields: [buildChampionItems.buildChampionId],
    references: [buildChampions.id],
  }),
}));
