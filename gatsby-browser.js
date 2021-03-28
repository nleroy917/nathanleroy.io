import './src/styles/global.css';
import "./src/styles/prism.css"
import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider initialEnabled={true}>{element}</PreviewStoreProvider>
)