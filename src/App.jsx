import { Routes, Route, useLocation, Navigate } from 'react-router-dom'

import Header from '@components/Header'
import Home from '@views/Home'
import Article from '@views/Article'
import Footer from '@components/Footer'

export default function App() {
  return (
    <div className="h-full min-h-screen bg-calm p-8 text-primary">
      <div className="mx-auto max-w-4xl border-l-2 border-primary pl-4">
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
