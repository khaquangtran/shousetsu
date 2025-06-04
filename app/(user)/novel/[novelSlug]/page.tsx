import {
  getChapterByNovelId,
  getNovelBySlug,
} from '@/app/utils/db/queries/select'
import Link from 'next/link'

export default async function Page({
  params,
}: {
  params: Promise<{ novelSlug: string }>
}) {
  const { novelSlug } = await params

  const novel = (await getNovelBySlug(novelSlug))[0]
  const chapters = await getChapterByNovelId(novel.id)

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
            {chapters.length} chapters
          </p>
          <h2 className="font-semibold font-serif text-xl sm:text-2xl md:text-4xl tracking-tight text-center uppercase">
            chapters
          </h2>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-2 md:px-0 font-serif">
        <ul className="flex flex-col gap-10">
          {chapters.map((chapter, i) => (
            <li key={i}>
              <p className="font-serif text-center text-xs sm:text-sm md:text-base">
                Chapter {chapter.chapterNumber}
              </p>
              <Link
                href={`/novel/${novelSlug}/${chapter.slug}`}
                className="link"
              >
                <h1 className="font-serif text-lg sm:text-xl md:text-2xl tracking-tight text-center">
                  {chapter.name}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
