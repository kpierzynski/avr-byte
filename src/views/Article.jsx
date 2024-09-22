import { useEffect, useState, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@stores/store'
import Markdown from '@components/Markdown'

import { useLoaderData, useRouteError, Await } from 'react-router-dom'

const wordsPerMinute = 225

function Loading() {
  return (
    <div className="my-8 h-full text-center text-2xl">
      Typing up the article...
      <span className="cursor-blink animate-blink"> |</span>
    </div>
  )
}

function Error() {
  return (
    <div className="my-8 h-full text-center text-2xl">
      Typewriter run out of ink.
      <div className="text-xl">Check if requested article exists.</div>
    </div>
  )
}

export default function Article() {
  const data = useLoaderData()

  return (
    <Suspense fallback={<Loading />}>
      <Await resolve={data.article} errorElement={<Error />}>
        {(article) => {
          return (
            <div className="flex flex-col">
              <h1 className="py-10 text-center text-5xl">{article.title}</h1>

              <span className="self-end text-gray-400">
                ({article.length} words){' '}
                {Math.ceil(article.length / wordsPerMinute)} min read |{' '}
                {article.date}
              </span>

              <div className="py-6">
                <Markdown markdownText={article.content} />
              </div>
            </div>
          )
        }}
      </Await>
    </Suspense>
  )
}
