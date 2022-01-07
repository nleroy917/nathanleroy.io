import React from 'react';
import styled from 'styled-components';
import { Tag } from './slices';
import '../styles/project.css';
import { Link } from 'gatsby';

const Hover = styled.div`
    box-shadow: none;
    &:hover {
        box-shadow: ${props => props.color} -6px 6px;
        transform: translate(6px, -6px);
    }
`

const Project = ({project, i}) => {
  const colors = ['#b827fc', '#2c90fc', '#b8fd33', '#fec837', '#fd1892']
  const rand_color = colors[Math.floor(Math.random() * colors.length)]
  return (
      <Hover 
        className="max-w-sm mx-2 my-4 text-left transition-all bg-white project-border" 
        key={i}
        color={rand_color}
      >
      <div className="flex flex-col justify-between">
       <div>
        <img src={project.node.data.image.url} className="project-image" alt={project.node.data.image.alt}/>
        <p className="p-3 text-2xl font-bold">{project.node.data.name[0].text}</p>
        <div className="flex flex-row mx-3 space-x-2">{project.node.tags.map((tag,i) => <Tag key={i} tag={tag}/>)}</div>
        <div className="px-3 py-2 mb-2 text-sm font-light leading-tight project-description">
          {project.node.data.description[0].text}
        </div>
        </div>
        <div className="flex flex-row m-4 space-x-2" style={{flex: '1'}}>
          <Link className="no-underline" href={project.node.data.github.url}>
            <button 
              className="px-4 py-1 text-lg font-bold text-white transition-all bg-black border-2 border-black rounded-lg hover:bg-gray-700 focus:outline-none"
            >
                GitHub
            </button>
          </Link>
          <Link className="no-underline" href={project.node.data.website.url}>
            <button 
              className="px-4 py-1 text-lg font-bold text-black transition-all bg-transparent border-2 border-black rounded-lg hover:bg-black focus:outline-none hover:bg-gray-200">
                  Website
            </button>
          </Link>
        </div>
        </div>
      </Hover>
  )
}

export default Project