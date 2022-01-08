import React from 'react'

function AboutMe({ aboutMe, anchors }) {
  return (
    <div className="px-5 mx-auto bg-blue-200 xl:px-64 lg:px-64 md:px-52" ref={anchors.bio}>
      <div className="flex flex-col items-center justify-start py-10 xl:flex-row lg:flex-row" style={{ minHeight: '70vh' }}>
        <div>
          <h1 className="text-6xl font-bold lg:text-6xl xl:font-6xl lg:font-6xl">{aboutMe.heading.text}</h1>
          <div className="my-4">
            <p className="my-2">{aboutMe.about_me.text}</p>
          </div>
        </div>
        <div className="mx-2 mt-20 -mb-10 xl:mt-0 lg:mt-0 xl:mx-20 lg:mx-20">
          <img src={aboutMe.image.url} className="code-snippet" alt={aboutMe.image.alt} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
