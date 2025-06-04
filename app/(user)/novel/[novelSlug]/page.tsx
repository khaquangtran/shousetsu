import { getNovelBySlug } from '@/app/utils/db/queries/select'

export default async function Page({
  params,
}: {
  params: Promise<{ novelSlug: string }>
}) {
  const { novelSlug } = await params

  const data = await getNovelBySlug(novelSlug)

  const novel = data[0].novel
  const chapter = data[0].chapter ?? []

  return (
    <section className="mx-auto max-w-3xl mt-10 px-2 md:px-0">
      <p className="font-eb-garamond italic">{novel.author}</p>
      <h1 className="font-bold font-eb-garamond text-4xl tracking-tighter">
        {novel.name}
      </h1>
      <h1 className="font-bold font-eb-garamond text-3xl tracking-tighter mt-10">
        Chapters
      </h1>
    </section>
  )
}
