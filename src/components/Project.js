import React from 'react'
import { Tag } from './slices'
import '../styles/project.css'
import '../styles/custom.css'
import { Link } from 'gatsby'

function Project({ project, i }) {
  return (
    <div className="max-w-md mx-auto my-4 text-left bg-white border-2 border-black rounded-lg shadow-md bg-gradient hover:animate-pulse md:w-11/12 lg:w-6/12" key={i}>
      <div className="flex flex-col justify-between">
        <div>
          <img src={project.node.data.image.url} className="border-b border-black rounded-t-lg project-image" alt={project.node.data.image.alt} />
          <p className="p-3 text-2xl font-bold">{project.node.data.name.text}</p>
          <div className="flex flex-row mx-3 space-x-2">{project.node.tags.map((tag, i) => <Tag key={i} tag={tag} />)}</div>
          <div className="px-3 py-2 mb-2 text-sm font-light leading-tight project-description">
            {project.node.data.description.text}
          </div>
        </div>
        <div className="flex flex-row m-4 space-x-2" style={{ flex: '1' }}>
          <Link className="no-underline" href={project.node.data.github.url}>
            <button
              className="px-4 py-1 text-lg font-bold text-white transition-all bg-black border-2 border-black rounded-lg hover:bg-gray-700 focus:outline-none"
            >
              GitHub
            </button>
          </Link>
          <Link className="no-underline" href={project.node.data.website.url}>
            <button
              className="px-4 py-1 text-lg font-bold text-black transition-all bg-transparent border-2 border-black rounded-lg focus:outline-none hover:bg-gray-200"
            >
              Website
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
