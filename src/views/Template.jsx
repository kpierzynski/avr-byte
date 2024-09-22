import { Outlet, useRouteError, useLocation } from 'react-router-dom'

import Header from '@components/Header'
import Footer from '@components/Footer'

function Error() {
  return (
    <div className="my-8 text-center text-2xl">
      404
      <div className="text-xl">
        You have reached out to the unspeakable and unrecordable.
      </div>
    </div>
  )
}

export default function Template() {
  const error = useRouteError()
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen bg-calm p-8 font-thin text-primary">
      <div className="mx-auto flex w-full max-w-4xl flex-col border-l-2 border-primary pl-4">
        <Header />

        {!pathname.includes('article') && (
          <div className="py-6 text-center text-6xl font-extrabold uppercase tracking-[1rem] sm:text-7xl sm:tracking-[1.2rem] md:text-7xl md:tracking-[0.9rem] lg:text-8xl lg:tracking-[1rem]">
            <span className="hidden md:inline">the</span>{' '}
            {import.meta.env.VITE_APP_NAME}
          </div>
        )}

        <div className="grow">{error ? <Error /> : <Outlet />}</div>
        <Footer />
      </div>
    </div>
  )
}
