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
        <h2 className="font-semibold font-serif text-2xl tracking-tight text-center uppercase">
          chapters
        </h2>
        <ul className="mt-28 flex flex-col gap-10">
          {chapters.map((chapter, i) => (
            <li key={i}>
              <span className="font-serif italic text-xs md:text-sm">
                Chapter {chapter.chapterNumber}
              </span>
              <Link
                href={`/novel/${novelSlug}/${chapter.slug}`}
                className="hover:text-red-700"
              >
                <h1 className="font-serif text-lg md:text-xl tracking-tight">
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
