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
      <section className="my-20 pb-20">
        <div className="flex justify-between flex-row">
          <div></div>
          <div>
            <h1 className="font-serif text-center">{novel.name}</h1>
            <p className="font-serif text-center text-xs">{novel.author}</p>
          </div>
          <div></div>
        </div>
      </section>
      <section className="mx-auto max-w-3xl mt-10 px-2 md:px-0">
        <div>
          <p className="text-xs md:text-sm font-serif text-center">
            Chapter {chapter.chapterNumber}
          </p>
          <h2 className="font-medium font-serif text-2xl tracking-tight text-center">
            {chapter.name}
          </h2>
        </div>
        <div className="font-serif mt-28">{chapter.content}</div>
      </section>
    </>
  )
}
