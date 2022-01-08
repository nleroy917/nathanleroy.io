import React from 'react'
import { graphql } from 'gatsby'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/layouts'

export const query = graphql`
query BlogPosts {
  allPrismicPost(sort: {fields: data___date, order: DESC}) {
      edges {
        node {
          id
          uid
          type
          data {
            title {
              richText
            }
            date
            body {
              ... on PrismicPostDataBodyText {
                id
                slice_label
                slice_type
                primary {
                  text {
                    richText
                  }
                }
              }
            }
            blurb {
              text
            }
          }
          tags
        }
      }
    }
} 
`

function Blogpage({ data }) {
  const [posts, setPosts] = React.useState(data.allPrismicPost.edges)
  const onPostSearch = (e) => {
    const val = e.target.value.toLowerCase()
    // eslint-disable-next-line max-len
    setPosts(data.allPrismicPost.edges.filter((post) => post.node.data.blurb.text.includes(val) || post.node.data.title.richText.includes(val)))
  }
  return (
    <Layout>
      <div className="container p-5 mx-auto xl:px-52 lg:px-52 lg:max-w-6xl">
        <div>
          <input style={{ width: '100%' }} onChange={onPostSearch} placeholder="Search blog posts..." className="px-5 py-2 my-4 text-lg border-2 border-purple-400 border-opacity-50 rounded-full outline-none focus:border-opacity-100 xl:w-96 lg:w-96" />
        </div>
        <BlogPosts posts={posts} />
      </div>
    </Layout>
  )
}

export default Blogpage
