import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import '../../styles/header.css'
import { Link } from 'gatsby'

export default function () {
  return (
    <header className="container">
      <div className="flex flex-row items-center justify-between p-5">
        <div className="ml-2 font-light text-black hover:text-purple-500">
          <Link to="/" className="no-underline">Home</Link>
        </div>
        <div className="flex flex-row items-center">
          <a href="https://linkedin.com/in/nathanjleroy/"><StaticImage src="../../images/linkedin.png" alt="linkedin-logo" className="mx-4 transition-all logo" /></a>
          <a href="https://twitter.com/NathanJLeRoy"><StaticImage src="../../images/twitter.png" alt="twitter-logo" className="mx-4 transition-all logo" /></a>
          <a href="https://github.com/NLeRoy917"><StaticImage src="../../images/github.png" alt="github-logo" className="mx-4 ml-6 transition-all logo" /></a>
        </div>
      </div>
    </header>
  )
}
