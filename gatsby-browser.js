import './src/styles/global.css'
import './src/styles/prism.css'

import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import post from './src/templates/post'

const linkResolver = require('./src/utils/linkResolver')

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        linkResolver,
        componentResolver: componentResolverFromMap({
          post,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)
