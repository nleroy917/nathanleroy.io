import React from 'react';
import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import {
  Code, ImageCaption, Quote, Text, Alert,
} from '../components/slices';
import { readTimeAnalyzer } from '../utils/readTimeAnalyzer';
import SEO from '../components/seo';
import SocialEmbed from '../components/slices/SocialEmbed';
import Utterances from '../components/Utterances';

// Query for the Blog Post content in Prismic
export const query = graphql`
  query BlogPostQuery($uid: String) {
    prismicPost(uid: { eq: $uid }) {
      id
      uid
      lang
      type
      data {
        date
        title {
          richText
        }
        body {
          ... on PrismicPostDataBodyText {
            slice_label
            slice_type
            primary {
              text {
                richText
              }
            }
          }
          ... on PrismicPostDataBodyQuote {
            slice_label
            slice_type
            primary {
              quote {
                richText
              }
            }
          }
          ... on PrismicPostDataBodyImageWithCaption {
            id
            slice_label
            slice_type
            primary {
              image {
                alt
                url
              }
              caption {
                richText
              }
            }
          }
          ... on PrismicPostDataBodyCode {
            id
            primary {
              code {
                richText
              }
            }
            slice_type
          }
          ... on PrismicPostDataBodyAlert {
            id
            slice_type
            primary {
              alert {
                richText
              }
              alert_title {
                richText
              }
              type
            }
          }
          ... on PrismicPostDataBodySocialMediaEmbed {
            id
            slice_type
            primary {
              embed_code {
                html
                richText
                text
              }
            }
          }
        }
        blurb {
          richText
        }
        seo_image {
          alt
          url
        }
        url
      }
    }
  }
`;

// Sort and display the different slice options
const PostSlices = ({ slices }) => slices.map((slice, index) => {
  const res = (() => {
    switch (slice.slice_type) {
      case 'text':
        return (
          <div key={index} className="my-4">
            <Text slice={slice} />
          </div>
        );

      case 'quote':
        return (
          <div key={index} className="">
            <Quote slice={slice} />
          </div>
        );

      case 'image_with_caption':
        return (
          <div key={index} className="">
            <ImageCaption slice={slice} />
          </div>
        );

      case 'code':
        return (
          <div key={index} className="">
            <Code slice={slice} />
          </div>
        );

      case 'alert':
        return (
          <div key={index} className="">
            <Alert slice={slice} />
          </div>
        );

      case 'social_media_embed':
        return (
          <div key={index} className="">
            <SocialEmbed slice={slice} />
          </div>
        );

      default:
    }
  })();
  return res;
});

// Display the title, date, and content of the Post
function PostBody({ blogPost }) {
  let postDate = new Date(blogPost.date);
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : '';

  const readTime = readTimeAnalyzer({ node: { data: blogPost } });

  return (
    <div>
      <div className="container border-b border-purple-200">
        <div className="mb-2">
          <Link to="/blog" className="text-purple-600 hover:text-black">
            back to list
          </Link>
          {' | '}
          <Link to="/" className="text-black hover:text-purple-600">
            home
          </Link>
        </div>
        <h1 className="text-4xl font-bold lg:text-5xl xl:text-6xl">
          {RichText.asText(blogPost.title.richText).length !== 0
            ? RichText.asText(blogPost.title.richText)
            : 'Untitled'}
        </h1>
        <h4 className="m-2 text-2xl font-light">
          <small>
            {postDate}
            {' '}
            ???
            {' '}
            {readTime}
          </small>
        </h4>
      </div>
      {/* Go through the slices of the post and render the appropiate one */}
      <PostSlices slices={blogPost.body} />
    </div>
  );
}

function Post({ data }) {
  if (!data) return null;
  // Define the Post content returned from Prismic
  const postId = data.prismicPost.uid;
  const post = data.prismicPost.data;
  return (
    <>
      <SEO post={post} />
      <div className="container p-5 mx-auto xl:max-w-4xl">
        <PostBody blogPost={post} />
        <div className="py-4">
          <Utterances id={postId} />
        </div>
      </div>
    </>
  );
}

export default Post;
