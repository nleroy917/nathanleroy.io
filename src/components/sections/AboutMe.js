import React from 'react';

function AboutMe({ aboutMe, anchors }) {
  return (
    <div
      className="px-5 mx-2 -translate-y-16 bg-white border-2 border-black rounded-lg shadow-lg md:mx-6 lg:mx-auto lg:max-w-6xl xl:max-w-6xl md:max-w-100"
      ref={anchors.bio}
    >
      <div className="flex flex-col items-center justify-start py-10 xl:flex-row lg:flex-row">
        <div>
          <h1 className="text-6xl font-bold lg:text-6xl xl:font-6xl lg:font-6xl">
            {aboutMe.heading.text}
          </h1>
          <div className="my-4">
            <p className="my-2">{aboutMe.about_me.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
