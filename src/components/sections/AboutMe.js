import React from 'react';
const AboutMe = ({ aboutMe, anchors }) => {
    return(
      <div className="px-5 xl:px-64 lg:px-64 md:px-52 mx-auto" ref={anchors.bio}>
        <div className="flex flex-col items-center justify-start xl:flex-row lg:flex-row min-h-screen">
          <div>
            <h1 className="text-4xl lg:text-6xl xl:font-6xl lg:font-6xl font-bold">{aboutMe.heading[0].text}</h1>
            <div className="my-4">
              {
                aboutMe.about_me.map((t, i) => <p key={i} className="my-2">{t.text}</p>)
              }
            </div>
          </div>
          <div className="mx-5 mt-20 xl:mt-0 lg:mt-0 xl:mx-20 lg:mx-20">
            <img src={aboutMe.image.url} className="code-snippet" alt={aboutMe.image.alt}/> 
          </div>
        </div>
      </div>
    )
}

export default AboutMe;