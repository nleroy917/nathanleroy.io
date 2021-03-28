import React from 'react'

// Function to determine the tag type
const renderSwitch = (tag) => {
    switch (tag.toLowerCase()) {
      case 'web dev':
        return <div className="rounded-full py-1 px-3 text-sm bg-indigo-300 border border-indigo-500 bg-opacity-50">Web Dev</div>
      case 'spotify':
        return <div className="rounded-full py-1 px-3 text-sm bg-green-400 border border-green-600 bg-opacity-50">Spotify</div>
      case 'python':
        return <div className="rounded-full py-1 px-3 text-sm bg-blue-500 border border-blue-800 bg-opacity-50">Python</div>
      case 'javascript':
          return <div className="rounded-full py-1 px-3 text-sm bg-yellow-300 border border-yellow-600 bg-opacity-50">JavaScript</div>
      case 'dev ops':
        return <div className="rounded-full py-1 px-3 text-sm bg-red-400 border border-red-600 bg-opacity-50">Dev Ops</div>
      case 'personal':
          return <div className="rounded-full py-1 px-3 text-sm bg-purple-400 border border-purple-600 bg-opacity-50">Personal</div>
      case 'school':
        return <div className="rounded-full py-1 px-3 text-sm bg-pink-500 border border-pink-600 bg-opacity-50">School</div>
      case 'karen':
          return <div className="rounded-full py-1 px-3 text-sm bg-yellow-700 border border-yellow-800 bg-opacity-50">Karen</div>
      case 'go':
          return <div className="rounded-full py-1 px-3 text-sm bg-blue-200 border border-blue-500 bg-opacity-50">Go</div>
      case 'next.js':
          return <div className="rounded-full py-1 px-3 text-sm bg-gray-400 border border-gray-600 bg-opacity-50">Next.js</div>
      case 'covid-19':
          return <div className="rounded-full py-1 px-3 text-sm bg-red-600 border border-red-800 bg-opacity-50">COVID-19</div>
      case 'react':
          return <div className="rounded-full py-1 px-3 text-sm bg-yellow-600 border border-yellow-800 bg-opacity-50">React</div>
      case 'bioinformatics':
          return <div className="rounded-full py-1 px-3 text-sm bg-pink-700 border border-pink-900 bg-opacity-50">Bioinformatics</div>
    }
}

export default ({ tag }) => <>{renderSwitch(tag)}</>