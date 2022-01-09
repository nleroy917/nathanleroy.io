import React from 'react'
import Project from '../Project'

function Projects({ projects, anchors }) {
  return (
    <div className="px-5 py-10 border-t-1 md:px-24" ref={anchors.projects}>
      <div className="min-h-screen">
        <div className="p-4 -translate-y-16 bg-white border-2 border-black rounded-lg shadow-lg">
          <h1 className="my-4 ml-2 text-6xl font-bold xl:font-6xl lg:font-6xl lg:mt-0 xl:mt-0">
            Projects
          </h1>
        </div>
        <div className="flex flex-col flex-wrap justify-start -translate-y-16 lg:flex-row xl:flex-row">
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
