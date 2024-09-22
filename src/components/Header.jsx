import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  const isArticle = pathname.startsWith('/article')

  let id = pathname.split('/').pop()
  id = /^\d+$/.test(id) ? id.padStart(3, '0') : '000'

  const HomeHeader = () => (
    <div className="flex justify-evenly uppercase">
      <Link to="https://github.com/kpierzynski">github</Link>
      <Link to="/">blog</Link>
      <Link to="/about">about</Link>
    </div>
  )

  const ArticleHeader = () => (
    <div className="flex place-content-between">
      <Link to="/">/home</Link>
      <span className="self-center pt-4 text-xl">{appName}</span>
      <span className="">#{id}</span>
    </div>
  )

  return (
    <div className="border-b-2 border-primary py-4">
      {isArticle ? <ArticleHeader /> : <HomeHeader />}
    </div>
  )
}
