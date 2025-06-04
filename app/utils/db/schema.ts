import {
  index,
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'

export const userRolesEnum = pgEnum('userRoles', ['user', 'admin'])

export const user = pgTable(
  'user',
  {
    id: serial('id').primaryKey(),
    username: text('username').notNull(),
    password: text('password').notNull(),
    email: text('email').notNull(),
    role: userRolesEnum().default('user'),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex('user_username_idx').on(table.username)]
)

export const novel = pgTable(
  'novel',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    author: text('author').notNull(),
    slug: text('slug').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => [uniqueIndex('novel_slug_idx').on(table.slug)]
)

export const chapter = pgTable(
  'chapter',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    slug: text('slug').notNull(),
    chapterNumber: integer('chapter_number').notNull(),
    novelId: integer('novel_id')
      .notNull()
      .references(() => novel.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('updated_at')
      .notNull()
      .$onUpdate(() => new Date()),
  },
  (table) => [
    uniqueIndex('chapter_slug_idx').on(table.slug),
    index('chapter_novel_id_idx').on(table.novelId),
  ]
)

export type InsertUser = typeof user.$inferInsert
export type SelectUser = typeof user.$inferSelect

export type InsertNovel = typeof novel.$inferInsert
export type SelectNovel = typeof novel.$inferSelect

export type InsertChapter = typeof chapter.$inferInsert
export type SelectChapter = typeof chapter.$inferSelect
