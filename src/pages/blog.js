import React from 'react';
import { graphql, Link } from 'gatsby';
import BlogPosts from '../components/BlogPosts';
import Layout from '../components/layouts';

export const query = graphql`
  query BlogPosts {
    allPrismicPost(sort: { fields: data___date, order: DESC }) {
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
`;

function Blogpage({ data }) {
  const [posts, setPosts] = React.useState(data.allPrismicPost.edges);
  const onPostSearch = (e) => {
    const val = e.target.value.toLowerCase();
    // eslint-disable-next-line max-len
    setPosts(
      data.allPrismicPost.edges.filter(
        // eslint-disable-next-line max-len
        (post) => post.node.data.blurb.text.includes(val) || post.node.data.title.richText.includes(val),
      ),
    );
  };
  return (
    <Layout>
      <div className="p-10 border-b-2 border-black md:p-8 bg-gradient xl:px-52 lg:px-52">
        <Link to="/">Home</Link>
        <p className="my-2 text-4xl font-bold md:text-6xl">Blog Posts</p>
        <p>I try occasionally to write about my projects and life... at least as much as I can</p>
      </div>
      <div className="container p-5 mx-auto -translate-y-12 xl:px-52 lg:px-52 lg:max-w-6xl">
        <div>
          <input
            style={{ width: '100%' }}
            onChange={onPostSearch}
            placeholder="Search blog posts..."
            className="px-5 py-2 my-2 text-lg border-2 border-black rounded-lg shadow-lg outline-none xl:w-96 lg:w-96 focus:border-purple-600"
          />
        </div>
        <BlogPosts posts={posts} />
      </div>
    </Layout>
  );
}

export default Blogpage;
