import React from 'react'
import { graphql, Link } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { withUnpublishedPreview } from 'gatsby-source-prismic'
import { Code, ImageCaption, Quote, Text, Alert } from '../components/slices'
import { readTimeAnalyzer } from '../utils/readTimeAnalyzer'
import Commento from '../components/Commento';
import SEO from '../components/seo'
import SocialEmbed from '../components/slices/SocialEmbed'

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
        ... on PrismicPostBodySocialMediaEmbed {
          id
          slice_type
          primary {
            embed_code {
              html
              raw
              text
            }
          }
        }
      }
      blurb {
        raw
      }
      seo_image {
        alt
        url
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
            
              case 'social_media_embed':
                return (
                  <div key={index} className="">
                    <SocialEmbed slice={slice} />
                  </div>
                )

        default:
      }
    })()
    return res
  })

// Display the title, date, and content of the Post
const PostBody = ({ blogPost }) => {
  let postDate = new Date(blogPost.date)
  postDate = postDate
  ? new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(postDate)
  : ''

  let readTime = readTimeAnalyzer({node: {data: blogPost}})

  return (
    <div>
      <div className="container border-b border-purple-200">
        <div className="mb-2">
          <Link to="/blog" className="text-purple-600 hover:text-black">back to list</Link>{' | '}<Link to="/" className="text-black hover:text-purple-600">home</Link>
        </div>
        <h1 className="text-6xl font-bold lg:text-5xl xl:text-5xl">
          {RichText.asText(blogPost.title.raw).length !== 0
            ? RichText.asText(blogPost.title.raw)
            : 'Untitled'}
        </h1>
        <h4 className="font-light text-2xl mb-2"><small>{postDate} • {readTime}</small></h4>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={blogPost.body} />
    </div>
  )
}

const Post = ({ data }) => {
  if (!data) return null
  // Define the Post content returned from Prismic
  const post_id = data.prismicPost.uid
  const post = data.prismicPost.data
  return (
    <>
     <SEO
      post={post}
     />
     <div className="container p-5 xl:max-w-3xl mx-auto">
      <PostBody blogPost={post} />
      <div className="my-4 py-4 border-t border-purple-200">
        <Commento id={post_id} />
      </div>
     </div>
    </>
  )
}

export default withUnpublishedPreview(Post)
