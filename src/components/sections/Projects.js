import React from 'react';
import Project from '../Project';

const Projects = ({ projects, anchors }) => {
    return(
      <div className="px-5 xl:px-52 lg:px-52 md:px-52 mx-auto" ref={anchors.projects}>
        <div className="min-h-screen">
          <h1 className="text-6xl xl:font-6xl lg:font-6xl font-bold mt-20 lg:mt-0 xl:mt-0 mb-4 ml-2">Projects</h1>
          <div className="flex flex-col align-center justify-start lg:flex-row xl:flex-row flex-wrap">
            {
              projects.map((project, i) => {
                return (
                  <Project i={i} key={i} project={project} />
                )
              })
            }
          </div>
        </div>
      </div>
    )
}

export default Projects;