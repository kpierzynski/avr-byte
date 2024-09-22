import { Suspense } from 'react'
import Card from '@components/Card'

import { useLoaderData, Await } from 'react-router-dom'

function Loading() {
  return (
    <div className="my-8 text-center text-2xl">
      Fetching articles from archive...
      <span className="cursor-blink animate-blink"> |</span>
    </div>
  )
}

function Error() {
  return (
    <div className="my-8 text-center text-2xl">
      Archive burned down.
      <div className="text-xl">Contact scribe to learn more.</div>
    </div>
  )
}

export default function Home() {
  const data = useLoaderData()

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data.articles} errorElement={<Error />}>
        {(articles) => {
          return (
            <div className="divide-y-2 divide-primary py-4">
              {articles.map((article, i) => (
                <Card
                  key={`article-${i}`}
                  title={article.title}
                  date={article.date}
                  begin={article.begin}
                  id={article.id}
                  imgSrc={article.img}
                />
              ))}
            </div>
          )
        }}
      </Await>
    </Suspense>
  )
}
