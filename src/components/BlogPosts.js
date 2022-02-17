import React from 'react';
import { Link } from 'gatsby';
import { RichText, Date } from 'prismic-reactjs';
import { Tag } from './slices';
import { readTimeAnalyzer } from '../utils/readTimeAnalyzer';
import '../styles/postcard.css';

// A summary of the Blog Post
function PostCard({ post, id }) {
  // Store and format the blog post's publication date
  let postDate = Date(post.node.data.date);
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      }).format(postDate)
    : '';
  const readTime = readTimeAnalyzer(post);
  // // Default title when post has no title set
  const defaultTitle = 'Untitled';
  return (
    <div key={id} className="w-full rounded-lg">
      <div className="p-5 transition-all bg-white border-2 border-black rounded-lg shadow-md hover:border-purple-600 hover:shadow-sm hover:border-opacity-100">
        <div className="flex flex-row items-start justify-between">
          <h2 className="text-2xl font-bold">
            {RichText.asText(post.node.data.title.richText).length !== 0
              ? RichText.asText(post.node.data.title.richText)
              : defaultTitle}
          </h2>
          <div>
            <Link to={`/blog/${post.node.uid}`}>
              <button className="px-4 py-1 ml-1 text-lg font-bold text-black transition-all bg-transparent border-2 border-black rounded-lg lg:ml-2 xl:ml-2 hover:bg-black hover:text-white">
                Read
              </button>
            </Link>
          </div>
        </div>
        <p className="font-light">
          <time className="text-sm">
            {postDate} <b> • </b> {readTime}
          </time>
        </p>
        <div className="flex flex-row my-2 space-x-2">
          {post.node.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
        <p className="text-sm lg:text-base xl:text-base">{post.node.data.blurb.text}</p>
      </div>
    </div>
  );
}

export default function ({ posts }) {
  if (!posts) return null;
  return (
    <div className="flex flex-col items-start justify-start space-y-5">
      {posts.map((post) => (
        <PostCard post={post} id={post.node.id} key={post.node.id} />
      ))}
    </div>
  );
}
