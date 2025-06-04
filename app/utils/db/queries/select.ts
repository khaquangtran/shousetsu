import { db } from '../index'
import { chapter, novel } from '@/app/utils/db/schema'
import { eq } from 'drizzle-orm'

export async function getNovels() {
  return db.select().from(novel)
}

export async function getNovelBySlug(slug: string) {
  return db
    .select()
    .from(novel)
    .where(eq(novel.slug, slug))
    .leftJoin(chapter, eq(chapter.novelId, novel.id))
}
