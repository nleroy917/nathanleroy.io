import React from 'react';
import { Link } from 'gatsby';
import cv from '../../documents/cv_April2021.pdf'

// Using the queried Blog Home document data, we render the top section
const HomeHead = ({ home, projects, anchors }) => {

    const [aboutMe, setAboutMe] = React.useState(false);
    const [code, setCode] = React.useState(false)

    return (
      <div className="max-w-full lg:max-w-4xl xl:max-w-4xl md:max-w-100 mx-auto h-screen">
        <div className=" flex flex-col text-center lg:text-left xl:text-left justify-center lg:justify-center xl:justify-center lg:items-start xl:items-start items-center " style={{height: '90vh'}}>
          <p className="font-bold xl:text-7xl md:text-6xl text-5xl">{home.headline[0].text}</p>
          <div className="name-box bg-purple-200"></div>
          <div className="mb-4 xl:mb-6 lg:mb-5 font-light xl:text-2xl lg:text-2xl">
            <p>{home.description[0].text}</p>
          </div>
          <div className="flex flex-row justify-center lg:justify-start xl:justify-start items-center space-x-4 xl:space-x-6">
            <div 
              onMouseEnter={()=>setAboutMe(true)} 
              onMouseLeave={()=>setAboutMe(false)}
              className="cursor-pointer text-lg"
            >
              <p className="hover:underline text-sm lg:text-lg xl:text-lg">About me <span className="font-serif" style={{fontSize: '0.7rem'}}>▼</span></p>
                <div style={{position: 'absolute', display: aboutMe ? 'block' : 'none'}} className="p-3 border-4 border-black">
                  <ul className="text-sm text-left lg:text-lg xl:text-lg list-none">
                    <li onClick={()=>{anchors.bio.current.scrollIntoView()}} className="hover:underline p-1">Bio</li>
                    <li onClick={()=>{anchors.projects.current.scrollIntoView()}} className="hover:underline p-1">Projects</li>
                    <li onClick={()=>{anchors.contact.current.scrollIntoView()}} className="hover:underline p-1">Contact</li>
                  </ul>
                </div>
             </div>
             <div 
               onMouseEnter={()=>setCode(true)} 
               onMouseLeave={()=>setCode(false)}
               className="cursor-pointer text-lg"
              >
              <p className="hover:underline text-sm lg:text-lg xl:text-lg">Code<span className="font-serif" style={{fontSize: '0.7rem'}}>▼</span></p>
                <div style={{position: 'absolute', display: code ? 'block' : 'none'}} className="p-3 border-4 border-black">
                  <ul className="text-sm text-left lg:text-lg xl:text-lg list-none">
                    {
                      projects.map((project, i) => {
                        return (
                          <li className="hover:underline p-1" key={i}><a href={project.node.data.github.url}>{project.node.data.name[0].text}</a></li>
                        )
                      })
                    }
                  </ul>
                </div>
             </div>
            <div><p className="hover:underline transition-all xl:text-lg lg:text-lg cursor-pointer"><a href={cv} target="_blank" className="no-underline text-black">CV</a></p></div>
            <Link to="/blog"><button className="text-sm bg-transparent hover:bg-black text-black hover:text-white py-1 px-4 border border-black transition-all">Blog</button></Link>
          </div>
        </div>
      </div>
    )
  }
export default HomeHead;
