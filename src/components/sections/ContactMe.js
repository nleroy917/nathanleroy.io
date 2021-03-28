import React from 'react';
const ContactMe = ({ contactMe, anchors }) => {

    return (
        <div className="px-5 xl:px-80 lg:px-80 md:px-80 mx-auto" ref={anchors.contact}>
          <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-6xl xl:font-6xl lg:font-6xl font-bold mt-20 lg:mt-0 xl:mt-0 mb-4 ml-2">{contactMe.title[0].text}</h1>
          <div className="my-4">
            <p className="font-light">{contactMe.contact_me[0].text}</p>
          </div>
          <div className="border-t border-b border-gray-600 my-4 p-4">
            <p className="font-bold text-2xl">nleroy917@gmail.com</p>
          </div>
          </div>
        </div>
    )
}

export default ContactMe;