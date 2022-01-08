import React from 'react'
import Project from '../Project'

function Projects({ projects, anchors }) {
  return (
    <div className="px-5 py-10 mx-auto bg-green-100 xl:px-52 lg:px-52 md:px-52" ref={anchors.projects}>
      <div className="min-h-screen">
        <h1 className="mt-20 mb-4 ml-2 text-6xl font-bold xl:font-6xl lg:font-6xl lg:mt-0 xl:mt-0">Projects</h1>
        <div className="flex flex-col flex-wrap justify-start align-center lg:flex-row xl:flex-row">
          {
              projects.map((project, i) => (
                <Project i={i} key={i} project={project} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Projects
