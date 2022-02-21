import React from 'react';
import Project from '../Project';

function Projects({ projects, anchors }) {
  return (
    <div
      className="px-2 mx-2 my-6 -translate-y-16 bg-white border-2 border-black rounded-lg shadow-lg md:mx-6 lg:mx-auto lg:max-w-6xl xl:max-w-6xl md:max-w-100"
      ref={anchors.projects}
    >
      <div className="pt-10 pb-2">
        <h1 className="mb-2 ml-2 text-6xl font-bold xl:font-6xl lg:font-6xl lg:mt-0 xl:mt-0">
          Projects
        </h1>
        <p className="mx-2 my-2">
          I am always working on personal projects outside of school and work.
          I love web programming and working with the Spotify API most of all.
          See below for some the latest projects that I have been working on:
        </p>
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
