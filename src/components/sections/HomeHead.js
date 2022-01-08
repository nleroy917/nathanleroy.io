import React from 'react'
import { Link } from 'gatsby'
import cv from '../../documents/cv_April2021.pdf'

// Using the queried Blog Home document data, we render the top section
function HomeHead({ home, projects, anchors }) {
  const [aboutMe, setAboutMe] = React.useState(false)
  const [code, setCode] = React.useState(false)
  return (
    <div className="h-screen max-w-full mx-auto lg:max-w-4xl xl:max-w-4xl md:max-w-100">
      <div className="flex flex-col items-center justify-center text-center lg:text-left xl:text-left lg:justify-center xl:justify-center lg:items-start xl:items-start" style={{ height: '90vh' }}>
        <p className="mb-2 text-5xl font-bold xl:text-7xl md:text-6xl">{home.headline.text}</p>
        <div className="mb-4 font-light xl:mb-6 lg:mb-5 xl:text-2xl lg:text-2xl">
          <p>{home.description.text}</p>
        </div>
        <div className="flex flex-row items-center justify-center space-x-4 lg:justify-start xl:justify-start xl:space-x-6">
          <div
            onMouseEnter={() => setAboutMe(true)}
            onMouseLeave={() => setAboutMe(false)}
            className="text-lg cursor-pointer"
          >
            <p className="text-base font-bold hover:underline lg:text-xl">
              About me
              <span className="font-serif" style={{ fontSize: '0.7rem' }}>▼</span>
            </p>
            <div style={{ position: 'absolute', display: aboutMe ? 'block' : 'none', background: '#fff' }} className="p-3 border-4 border-black">
              <ul className="text-base font-bold text-left list-none lg:text-lg xl:text-lg">
                <li onClick={() => { anchors.bio.current.scrollIntoView() }} className="p-1 hover:underline">Bio</li>
                <li onClick={() => { anchors.projects.current.scrollIntoView() }} className="p-1 hover:underline">Projects</li>
                <li onClick={() => { anchors.contact.current.scrollIntoView() }} className="p-1 hover:underline">Contact</li>
              </ul>
            </div>
          </div>
          <div
            onMouseEnter={() => setCode(true)}
            onMouseLeave={() => setCode(false)}
            className="text-lg cursor-pointer"
          >
            <p className="text-base font-bold hover:underline lg:text-xl">
              Code
              <span className="font-serif" style={{ fontSize: '0.7rem' }}>▼</span>
            </p>
            <div style={{ position: 'absolute', display: code ? 'block' : 'none', background: '#fff' }} className="p-3 border-4 border-black">
              <ul className="text-base font-bold text-left list-none lg:text-lg xl:text-lg">
                {
                      projects.map((project, i) => (
                        <li className="p-1 hover:underline" key={i}><a className="text-black no-underline" href={project.node.data.github.url}>{project.node.data.name.text}</a></li>
                      ))
                    }
              </ul>
            </div>
          </div>
          <div><p className="font-bold transition-all cursor-pointer hover:underline xl:text-lg lg:text-xl"><a href={cv} target="_blank" className="text-black no-underline" rel="noreferrer">CV</a></p></div>
          <Link to="/blog"><button className="px-4 py-1 text-lg text-black transition-all bg-transparent border-2 border-black rounded-lg hover:bg-black hover:text-white">Blog</button></Link>
        </div>
      </div>
    </div>
  )
}
export default HomeHead
