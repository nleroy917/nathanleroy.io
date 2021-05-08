import React from 'react'

export default ({ slice }) => {
    return (
      <div >
        <div dangerouslySetInnerHTML={{ __html: slice.primary.embed_code.text }} 
            className="w-full justify-center flex-row flex" ></div>
        </div>
  )
}