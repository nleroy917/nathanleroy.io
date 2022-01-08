import React from 'react'
import { RichText } from 'prismic-reactjs'

export default ({ slice }) => (
  <div className="container post-quote">
    <blockquote>{RichText.asText(slice.primary.quote.richText)}</blockquote>
  </div>
)
