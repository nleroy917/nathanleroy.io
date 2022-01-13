import React from 'react'

function ContactMe({ contactMe, anchors }) {
  return (
    <div className="border-t-2 border-black bg-gradient">
      <div className="px-5 mx-2 -translate-y-16 bg-white border-2 border-black rounded-lg shadow-lg md:mx-6 lg:mx-auto lg:max-w-6xl xl:max-w-6xl md:max-w-100" ref={anchors.contact}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="m-4 text-6xl font-bold xl:font-6xl lg:font-6xl">{contactMe.title.text}</h1>
          <div className="my-4">
            <div className="font-light">
              {
                contactMe.contact_me.text
              }
            </div>
          </div>
          <div className="p-4 my-4 border-t border-b border-gray-600">
            <p className="text-2xl font-bold">nleroy917@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
