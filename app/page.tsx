import { getNovels } from '@/app/utils/db/queries/select'
import Link from 'next/link'

export default async function Home() {
  const novels = await getNovels()

  return (
    <>
      <section className="mx-auto max-w-3xl mt-10 px-2 md:px-0">
        <ul className="flex flex-col gap-6 mt-7">
          {novels.map((novel, i) => (
            <li key={i}>
              <p className="font-eb-garamond italic">{novel.author}</p>
              <Link
                href={`/novel/${novel.slug}`}
                className="hover:text-red-600"
              >
                <span className="font-eb-garamond font-bold text-3xl tracking-tighter">
                  {novel.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
