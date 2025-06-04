import { getNovels } from '@/app/utils/db/queries/select'
import Link from 'next/link'

export default async function Home() {
  const novels = await getNovels()

  return (
    <>
      <section className="mt-20 mb-[10rem]">
        <h1 className="font-serif text-center">shōsetsu</h1>
        <p className="font-serif text-center text-xs">小説</p>
      </section>
      <section className="mx-auto max-w-3xl mt-20 mb-[10rem] px-2 md:px-0">
        <div>
          <p className="text-xs sm:text-sm md:text-base font-serif text-center">
            {novels.length} ongoing novels
          </p>
          <h2 className="font-semibold font-serif text-xl sm:text-2xl md:text-4xl tracking-tight text-center uppercase">
            Works in Progress
          </h2>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-2 md:px-0 font-serif">
        <ul className="flex flex-col gap-10">
          {novels.map((novel, i) => (
            <li key={i}>
              <p className="font-serif text-xs sm:text-sm md:text-base text-center">
                {novel.author}
              </p>
              <Link href={`/novel/${novel.slug}`} className="link">
                <h1 className="font-serif text-lg sm:text-xl md:text-2xl tracking-tight text-center">
                  {novel.name}
                </h1>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
