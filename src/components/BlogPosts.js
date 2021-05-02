import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'
import { Tag } from '../components/slices'
import { readTimeAnalyzer } from '../utils/readTimeAnalyzer';
import '../styles/postcard.css'

// A summary of the Blog Post
const PostCard = ({ post, id }) => {
  
  // Store and format the blog post's publication date
  let postDate = Date(post.node.data.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    }).format(postDate)
    : ''
  let readTime = readTimeAnalyzer(post)
  // // Default title when post has no title set
  const defaultTitle = 'Untitled'
  return (
    <div key={id} className="w-full">
      <div className="bg-white shadow-lg p-5 hover:shadow-sm transition-all border-2 border-purple-600 border-opacity-0 hover:border-opacity-100">
       <div className="flex flex-row items-start justify-between">
        <h2 className="text-2xl font-bold">
            {RichText.asText(post.node.data.title.raw).length !== 0
              ? RichText.asText(post.node.data.title.raw)
              : defaultTitle}
        </h2>
        <div>
        <Link to={post.node.url}><button className="ml-1 lg:ml-2 xl:ml-2 bg-transparent hover:bg-black text-black hover:text-white py-1 px-4 border border-black transition-all">Read</button></Link>
        </div>
       </div>
        <p className="font-light">
          <time className="text-sm">{postDate} <b> • </b> {readTime}</time>
        </p>
        <div className="flex flex-row space-x-2 my-2">{post.node.tags.map(tag => <Tag tag={tag}/>)}</div>
        <p className="text-sm lg:text-base xl:text-base">{post.node.data.blurb.text}</p>
      </div>
    </div>
  )
}

export default ({ posts }) => {
  if (!posts) return null
  return (
    <div className="flex flex-col items-start justify-start space-y-5">
      {posts.map((post) => (
        <PostCard post={post} id={post.node.id} key={post.node.id} />
      ))}
    </div>
  )
}
