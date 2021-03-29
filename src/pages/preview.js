import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { linkResolver } from '../utils/linkResolver'

const PreviewPage = ({ isPreview, isLoading }) => {
  const previewText = isPreview ? 'Loading' : 'Not a preview!'
  return (
    <div>
      <p>{previewText}</p>
    </div>
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: 'nathanleroy-io',
  linkResolver: () => linkResolver,
})