import React from 'react';
import Project from '../Project';

function Projects({ projects, anchors }) {
  return (
    <div
      className="px-2 mx-2 my-6 -translate-y-16 bg-white border-2 border-black rounded-lg shadow-lg md:mx-6 lg:mx-auto lg:max-w-6xl xl:max-w-6xl md:max-w-100"
      ref={anchors.projects}
    >
      <div className="py-10">
        <h1 className="mb-6 ml-2 text-6xl font-bold xl:font-6xl lg:font-6xl lg:mt-0 xl:mt-0">
          Projects
        </h1>
        <div className="flex flex-col items-start justify-start">
          {projects.map((project, i) => (
            <Project i={i} key={i} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
