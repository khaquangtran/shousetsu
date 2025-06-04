import { getNovels } from '@/app/utils/db/queries/select'
import Link from 'next/link'

export default async function Home() {
  const novels = await getNovels()

  return (
    <>
      <section className="my-20 pb-20">
        <h1 className="font-serif text-center">shōsetsu</h1>
        <p className="font-serif text-center text-xs">小説</p>
      </section>
      <section className="mx-auto max-w-3xl mt-10 px-2 md:px-0">
        <h2 className="font-semibold font-serif text-2xl tracking-tight text-center uppercase">
          Works in Progress
        </h2>
        <ul className="mt-28 flex flex-col gap-10">
          {novels.map((novel, i) => (
            <li key={i}>
              <Link
                href={`/novel/${novel.slug}`}
                className="hover:text-red-700"
              >
                <h1 className="font-serif text-lg md:text-xl tracking-tight text-center">
                  {novel.name}
                </h1>
              </Link>
              <p className="font-serif text-center text-xs md:text-sm">
                {novel.author}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
