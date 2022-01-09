import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from './Header'

export default function (props) {
  return (
    <StaticQuery
      query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    // eslint-disable-next-line react/jsx-props-no-spreading
      render={(data) => <Layout data={data} {...props} />}
    />
  )
}

function Layout({ data, children }) {
  // Define the meta title and description
  const { title, description } = data.site.siteMetadata

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <script async defer src="https://static.cdn.prismic.io/prismic.js?new=true&repo=nathanleroy-io" />
      </Helmet>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  )
}
