import { useEffect, useState } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Header from '@components/Header'
import Home from '@views/Home'
import Article from '@views/Article'
import Footer from '@components/Footer'

import { fetchRepoFiles, fetchFileContent } from '@/utils/fetcher'
import { useStore, ACTIONS } from '@/stores/store'

export default function App() {
  const { state, dispatch } = useStore()

  useEffect(() => {
    if (state.articles.length >= 2) return

    async function fetchData() {
      const files = await fetchRepoFiles({
        owner: 'kpierzynski',
        path: 'articles',
        repo: 'avr-byte',
        branch: 'master',
      })

      files.forEach(async (file) => {
        const content = await fetchFileContent({
          path: 'articles/' + file,
          owner: 'kpierzynski',
          repo: 'avr-byte',
          branch: 'master',
        })

        const [title, date, description, ...rest] = content.split('\n')

        dispatch({
          type: ACTIONS.ADD_ARTICLE,
          payload: {
            id: +file.split('.').at(0),
            title: title,
            date: date,
            content: rest.join('\n'),
          },
        })
      })
    }

    fetchData()
  }, [])

  return (
    <div className="flex min-h-screen bg-calm p-8 text-primary">
      <div className="mx-auto flex max-w-4xl flex-col border-l-2 border-primary pl-4">
        <Header />
        <Routes>
          <Route path="/article/:id" element={<Article />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
