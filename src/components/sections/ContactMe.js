import React from 'react'

function ContactMe({ contactMe, anchors }) {
  return (
    <div className="px-5 mx-auto bg-purple-200 xl:px-80 lg:px-80 md:px-80" ref={anchors.contact}>
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
  )
}

export default ContactMe
