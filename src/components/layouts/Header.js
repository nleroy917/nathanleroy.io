import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import '../../styles/header.css';
import { Link } from 'gatsby';

export default () => (
  <header className="container">
   <div className="flex flex-row justify-between items-center font-thin p-5">
    <div className="text-black hover:text-purple-500 ml-2">
     <Link to="/">Home</Link>
    </div>
    <div className="flex flex-row items-center">
     <a href="https://linkedin.com/in/nathanjleroy/"><StaticImage src="../../images/linkedin.png" alt="linkedin-logo" className="logo mx-4 transition-all"/></a>
     <a href="https://twitter.com/NathanJLeRoy"><StaticImage src="../../images/twitter.png" alt="twitter-logo" className="logo mx-4 transition-all"/></a>
     <a href="https://github.com/NLeRoy917"><StaticImage src="../../images/github.png" alt="github-logo" className="logo ml-6 mx-4 transition-all"/></a>
    </div>
   </div>
  </header>
)
