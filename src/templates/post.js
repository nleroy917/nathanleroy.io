import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withPreview } from 'gatsby-source-prismic'
import { Code, ImageCaption, Quote, Text, Alert } from '../components/slices'

// Query for the Blog Post content in Prismic
export const query = graphql`
query BlogPostQuery($uid: String) {
  prismicPost(uid: {eq: $uid}) {
    id
    uid
    lang
    type
    url
    data {
      date
      title {
        raw
      }
      body {
        ... on PrismicPostBodyText {
          slice_label
          slice_type
          primary {
            text {
              raw
            }
          }
        }
        ... on PrismicPostBodyQuote {
          slice_label
          slice_type
          primary {
            quote {
              raw
            }
          }
        }
        ... on PrismicPostBodyImageWithCaption {
          id
          slice_label
          slice_type
          primary {
            image {
              alt
              url
            }
            caption {
              raw
            }
          }
        }
        ... on PrismicPostBodyCode {
          id
          primary {
            code {
              raw
            }
          }
          slice_type
        }
        ... on PrismicPostBodyAlert {
          id
          slice_type
          primary {
            alert {
              raw
            }
            alert_title {
              raw
            }
            type
          }
        }
      }
    }
  }
}
`

// Sort and display the different slice options
const PostSlices = ({ slices }) =>
  slices.map((slice, index) => {
    const res = (() => {
      switch (slice.slice_type) {
        case 'text':
          return (
            <div key={index} className="my-4">
              <Text slice={slice} />
            </div>
          )

        case 'quote':
          return (
            <div key={index} className="">
              <Quote slice={slice} />
            </div>
          )

        case 'image_with_caption':
          return (
            <div key={index} className="">
              <ImageCaption slice={slice} />
            </div>
          )
        
          case 'code':
            return (
              <div key={index} className="">
                <Code slice={slice} />
              </div>
            )
          
            case 'alert':
              return (
                <div key={index} className="">
                  <Alert slice={slice} />
                </div>
              )

        default:
      }
    })()
    return res
  })

// Display the title, date, and content of the Post
const PostBody = ({ blogPost }) => {
  return (
    <div>
      <div className="container">
        <div className="mb-2">
          <Link to="/blog" className="text-black hover:text-purple-600">back to list</Link>{' | '}<Link to="/" className="text-black hover:text-purple-600">home</Link>
        </div>
        <h1 className="text-4xl font-bold lg:text-5xl xl:text-5xl">
          {RichText.asText(blogPost.title.raw).length !== 0
            ? RichText.asText(blogPost.title.raw)
            : 'Untitled'}
        </h1>
        <h4 className="font-light text-2xl"><small>{blogPost.date}</small></h4>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={blogPost.body} />
    </div>
  )
}

const Post = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post = data.prismicPost.data

  return (
     <div className="container p-5 xl:px-80 lg:px-80 mx-auto">
      <PostBody blogPost={post} />
     </div>
  )
}

export default withPreview(Post)
