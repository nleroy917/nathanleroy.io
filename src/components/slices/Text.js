import React from 'react'
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../utils/linkResolver'
import '../../styles/text.css'

export default ({ slice }) => (
  <div className="container">
    <div className="text-lg leading-normal">
      <RichText
        render={slice.primary.text.raw || []}
        linkResolver={linkResolver}
      />
    </div>
  </div>
)
