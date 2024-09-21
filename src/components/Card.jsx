import { Link } from 'react-router-dom'

export default function Card({ title, date, begin, id, imgSrc }) {
  const src = '/article/' + id

  return (
    <div className="flex grow flex-row transition duration-200 hover:scale-[101%]">
      {imgSrc && (
        <img src={imgSrc} className="py-4 pr-4 grayscale" alt="random" />
      )}

      <div className="flex flex-col gap-2 py-6">
        <Link
          to={src}
          className="border-primary pb-4 text-3xl font-bold text-primary"
        >
          {title}
        </Link>

        <h3 className="text-sm text-primary">{date}</h3>
        <p>{begin}</p>

        <Link to={src} className="underline">
          Read more {'->'}
        </Link>
      </div>
    </div>
  )
}
