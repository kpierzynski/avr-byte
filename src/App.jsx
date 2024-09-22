import { useEffect, useState } from 'react'
import { RouterProvider, defer, createBrowserRouter } from 'react-router-dom'

import Header from '@components/Header'
import Home from '@views/Home'
import Article from '@views/Article'
import Template from '@views/Template'

import { fetchArticles, fetchArticle } from '@/utils/fetcher'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    errorElement: <Template />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: async () => {
          const articles = fetchArticles()

          return defer({ articles })
        },
      },
      {
        path: '/article/:id',
        element: <Article />,
        loader: async ({ params }) => {
          const article = fetchArticle(params.id)

          return defer({ article })
        },
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
