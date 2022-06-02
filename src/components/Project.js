import React from 'react';
import { Link } from 'gatsby';
import { Tag } from './slices';
import '../styles/project.css';
import '../styles/custom.css';

function Project({ project, i }) {
  return (
    <div
      className="w-full mx-1 my-2 text-left bg-white border border-black rounded-lg shadow-md md:w-80"
      key={i}
    >
      <div className="flex flex-col justify-between h-full p-1">
        <div>
          <p className="p-3 text-2xl font-bold">{project.node.data.name.text}</p>
          <div className="flex flex-row flex-wrap mx-3 space-x-2">
            {project.node.tags.map((tag, j) => (
              <Tag key={j} tag={tag} />
            ))}
          </div>
          <div className="px-3 py-2 mb-2 text-base font-light leading-tight project-description">
            {project.node.data.description.text}
          </div>
        </div>
        <div className="flex flex-row m-2 space-x-2">
          <Link className="no-underline" href={project.node.data.github.url}>
            <button type="button" className="px-4 py-1 text-lg font-bold text-white transition-all bg-black border-2 border-black rounded-lg hover:bg-gray-700 focus:outline-none">
              GitHub
            </button>
          </Link>
          <Link className="no-underline" href={project.node.data.website.url}>
            <button type="button" className="px-4 py-1 text-lg font-bold text-black transition-all bg-transparent border-2 border-black rounded-lg focus:outline-none hover:bg-gray-200">
              Website
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
