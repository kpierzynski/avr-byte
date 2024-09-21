import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@stores/store'
import Markdown from '../components/Markdown'

const wordsPerMinute = 225

export default function Article() {
  const { id } = useParams()
  const { state, dispatch } = useStore()
  const [article, setArticle] = useState()

  useEffect(() => {
    const page = state.articles.find((article) => article.id === +id)

    if (!page) return

    setArticle(page)
  }, [state.articles, id])

  if (!article) return <div>Loading...</div>

  const articleLength = article.content.split(' ').length

  return (
    <div className="flex flex-col">
      <h1 className="py-10 text-center text-5xl">{article.title}</h1>

      <span className="self-end text-gray-400">
        ({articleLength} words) {Math.ceil(articleLength / wordsPerMinute)} min
        read | {article.date}
      </span>

      <div className="py-6">
        <Markdown markdownText={article.content} />
      </div>
    </div>
  )
}
