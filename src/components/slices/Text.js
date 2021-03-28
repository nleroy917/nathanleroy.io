import React from 'react'
import { RichText } from 'prismic-reactjs'
import GatsbyLink from '../GatsbyLink'

export default ({ slice }) => (
  <div className="container">
    <div className="text-lg leading-relaxed">
      <RichText
        render={slice.primary.text.raw || []}
        serializeHyperlink={GatsbyLink}
      />
    </div>
  </div>
)
