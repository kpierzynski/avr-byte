import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const isArticle = location.pathname.startsWith('/article')
  const id = location.pathname.split('/').pop().padStart(3, '0')

  const HomeHeader = () => (
    <div className="flex justify-evenly uppercase">
      <Link to="/article/1">github</Link>
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
