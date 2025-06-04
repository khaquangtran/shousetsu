import { db } from '../index'
import { chapter, novel } from '@/app/utils/db/schema'
import { and, eq } from 'drizzle-orm'

export async function getNovels() {
  return db.select().from(novel)
}

export async function getNovelBySlug(slug: string) {
  return db.select().from(novel).where(eq(novel.slug, slug))
}

export async function getChapterByNovelId(novelId: number) {
  return db.select().from(chapter).where(eq(chapter.novelId, novelId))
}

export async function getChapterBySlug(novelId: number, chapterSlug: string) {
  return db
    .select()
    .from(chapter)
    .where(and(eq(chapter.novelId, novelId), eq(chapter.slug, chapterSlug)))
}
