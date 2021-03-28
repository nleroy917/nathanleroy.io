import React from 'react';
import BlogPosts from '../components/BlogPosts';
import Layout from '../components/layouts';
import { withPreview } from 'gatsby-source-prismic'
import { graphql } from 'gatsby';

export const query = graphql`
  query BlogPosts {
    allPrismicPost(sort: {fields: data___date, order: DESC}) {
        edges {
          node {
            url
            id
            uid
            type
            data {
              title {
                raw
              }
              date
              body {
                ... on PrismicPostBodyText {
                  id
                  slice_label
                  slice_type
                  primary {
                    text {
                      raw
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

export const Blogpage = ({ data }) => {
    const [posts, setPosts] = React.useState(data.allPrismicPost.edges)
    const onPostSearch = (e) => {
        let val = e.target.value
        setPosts(data.allPrismicPost.edges.filter(post => {
            return post.node.data.blurb.text.includes(val) || post.node.data.title.raw[0].text.includes(val)
        }))
    }
    return(
        <Layout>
        <div className="container p-5 xl:px-52 lg:px-52 mx-auto">
          <div>
            <input style={{width: '100%'}} onChange={onPostSearch} placeholder="Search blog posts..." className="outline-none rounded-full py-2 px-5 my-4 text-lg border-2 border-purple-400 border-opacity-50 focus:border-opacity-100 xl:w-96 lg:w-96"/>
          </div>
          <BlogPosts posts={posts} />
        </div>
        </Layout>
    )
}

export default withPreview(Blogpage)