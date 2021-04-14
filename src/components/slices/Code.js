import React, { useEffect } from "react"
import Markdown from "react-markdown"
import { RichText } from "prismic-reactjs"
import Prism from "prismjs"
import "prismjs/components/prism-python.js"
import "prismjs/components/prism-go.js"
import "prismjs/components/prism-bash.js"
import "prismjs/components/prism-jsx.js"
import '../../styles/markdown.css'

export default ({ slice }) => {
  useEffect(() => {
      // call the highlightAll() function to style our code blocks
      Prism.highlightAll()
  })
  const rawMarkdown = RichText.asText(slice.primary.code.raw)
  return (
    <>
     <div className="text-sm gatsby-highlight my-4" style={{borderRadius: '0px !important'}}>
        <Markdown source={rawMarkdown}/>
     </div>
    </>
  )
}