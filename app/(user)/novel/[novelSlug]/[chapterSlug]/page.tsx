import { getChapterBySlug, getNovelBySlug } from '@/app/utils/db/queries/select'

export default async function Page({
  params,
}: {
  params: Promise<{ novelSlug: string; chapterSlug: string }>
}) {
  const { novelSlug, chapterSlug } = await params

  const novel = (await getNovelBySlug(novelSlug))[0] ?? null

  const chapter = (await getChapterBySlug(novel.id, chapterSlug))[0]

  return (
    <>
      <section className="mt-20 mb-[10rem]">
        <div className="flex justify-between flex-row">
          <div></div>
          <div>
            <h1 className="font-serif text-center">{novel.name}</h1>
            <p className="font-serif text-center text-xs">{novel.author}</p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl mt-20 mb-[10rem] px-2 md:px-0">
        <div>
          <p className="text-xs sm:text-sm md:text-base font-serif text-center">
            Chapter {chapter.chapterNumber}
          </p>
          <h2 className="font-medium font-serif text-xl sm:text-2xl md:text-4xl tracking-tight text-center">
            {chapter.name}
          </h2>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-2 md:px-0 font-serif">
        {chapter.content}
      </section>
    </>
  )
}
