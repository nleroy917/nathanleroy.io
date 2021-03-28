import React from 'react'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { Post } from '../templates/post'
import { Homepage } from './index'
import '../styles/404.css';

const Page404 = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <h1 className="text-8xl font-bold">404</h1>
    <div className="bg-purple-600 bg-opacity-50 four-oh-four-box"></div>
    <h3 className="text-3xl">The page you are looking for was not found</h3>
    <p>
      <a href="/">
        <button type="button" className="bg-transparent hover:bg-black text-black hover:text-white py-1 px-4 my-4 border border-black transition-all">Return home</button>
      </a>
    </p>
  </div>
)

export default withUnpublishedPreview(Page404, {
  templateMap: {
    post: Post,
    homepage: Homepage,
    prismicPost: Post,
    prismicHomepage: Homepage,
  },
})
