import { useStore } from '@stores/store'
import Card from '@components/Card'

export default function Home() {
  const { state, dispatch } = useStore()

  return (
    <>
      <div className="w-full py-6 text-center text-8xl font-extrabold uppercase tracking-[1rem]">
        the {appName}
      </div>
      <div className="flex flex-col divide-y-2 divide-primary py-4">
        {state.articles.map((article, i) => (
          <Card
            key={`article-${i}`}
            title={article.title}
            date={article.date}
            begin={article.content.slice(0, 200) + '...'}
            id={article.id}
            imgSrc={article.img}
          />
        ))}
      </div>
    </>
  )
}
