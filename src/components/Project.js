import React from 'react';
import styled from 'styled-components';
import { Tag } from './slices';
import '../styles/project.css';

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
        className="bg-white text-left mx-2 my-4 max-w-sm project-border transition-all" 
        key={i}
        color={rand_color}
      >
      <div className="flex flex-col justify-between">
       <div>
        <img src={project.node.data.image.url} className="project-image" alt={project.node.data.image.alt}/>
        <p className="font-bold text-2xl p-3">{project.node.data.name[0].text}</p>
        <div className="flex flex-row space-x-2 mx-3">{project.node.tags.map((tag,i) => <Tag key={i} tag={tag}/>)}</div>
        <div className="project-description px-3 py-2 mb-2 leading-tight font-light text-sm">
          {project.node.data.description[0].text}
        </div>
        </div>
        <div className="flex flex-row space-x-2 m-4" style={{flex: '1'}}>
          <button className="text-sm bg-black hover:bg-white py-1 px-4 border border-black transition-all focus:outline-none"><a className="no-underline text-white hover:text-black" href={project.node.data.github.url}>GitHub</a></button>
          <button className="text-sm bg-transparent hover:bg-black py-1 px-4 border border-black transition-all focus:outline-none"><a className="no-underline text-black hover:text-white" href={project.node.data.website.url}>Website</a></button>
        </div>
        </div>
      </Hover>
  )
}

export default Project