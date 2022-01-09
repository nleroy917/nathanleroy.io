import React from 'react'

function AboutMe({ aboutMe, anchors }) {
  return (
    <div className="px-5 mx-auto border-2 border-black rounded-lg shadow-lg xl:px-64 lg:px-64 md:px-24" ref={anchors.bio}>
      <div className="flex flex-col items-center justify-start py-10 xl:flex-row lg:flex-row">
        <div>
          <h1 className="text-6xl font-bold lg:text-6xl xl:font-6xl lg:font-6xl">{aboutMe.heading.text}</h1>
          <div className="my-4">
            <p className="my-2">{aboutMe.about_me.text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
