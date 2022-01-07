import React from 'react'
import '../styles/404.css'

function Page404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="font-bold text-8xl">404</h1>
      <div className="bg-purple-600 bg-opacity-50 four-oh-four-box" />
      <h3 className="text-3xl">The page you are looking for was not found</h3>
      <p>
        <a href="/">
          <button type="button" className="px-4 py-1 my-4 text-black transition-all bg-transparent border border-black hover:bg-black hover:text-white">Return home</button>
        </a>
      </p>
    </div>
  )
}

export default Page404
