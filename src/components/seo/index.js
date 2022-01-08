import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

function SEO({ post }) {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  const {
    title,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet>
      <meta name="description" content={post.blurb.richText[0].text} />
      <meta name="image" content={post.seo_image.url} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:card" content="summary_with_image" />
      <meta name="twitter:title" content={post.title.richText[0].text} />
      <meta name="twitter:description" content={post.blurb.richText[0].text} />
      <meta name="twitter:image" content={post.seo_image.url} />
      <meta name="twitter:image:alt" content={post.seo_image.alt} />
      <meta property="og:site_name" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={`https://nathanleroy.io${pathname}`} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={post.title.richText[0].text} />
      <meta property="og:description" content={post.blurb.richText[0].text} />
      <meta property="og:image" content={post.seo_image.url} />
      <meta property="og:image:alt" content={post.seo_image.alt} />
    </Helmet>
  )
}

export default SEO

const query = graphql`
query SEO {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        twitterUsername
      }
    }
  }
`
