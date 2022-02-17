import React from 'react';

// Function to determine the tag type
const renderSwitch = (tag) => {
  switch (tag.toLowerCase()) {
    case 'web dev':
      return (
        <div className="px-3 py-1 text-sm bg-indigo-300 bg-opacity-50 border border-indigo-500 rounded-full">
          Web Dev
        </div>
      );
    case 'spotify':
      return (
        <div className="px-3 py-1 text-sm bg-green-400 bg-opacity-50 border border-green-600 rounded-full">
          Spotify
        </div>
      );
    case 'python':
      return (
        <div className="px-3 py-1 text-sm bg-blue-500 bg-opacity-50 border border-blue-800 rounded-full">
          Python
        </div>
      );
    case 'javascript':
      return (
        <div className="px-3 py-1 text-sm bg-yellow-300 bg-opacity-50 border border-yellow-600 rounded-full">
          JavaScript
        </div>
      );
    case 'dev ops':
      return (
        <div className="px-3 py-1 text-sm bg-red-400 bg-opacity-50 border border-red-600 rounded-full">
          Dev Ops
        </div>
      );
    case 'personal':
      return (
        <div className="px-3 py-1 text-sm bg-purple-400 bg-opacity-50 border border-purple-600 rounded-full">
          Personal
        </div>
      );
    case 'school':
      return (
        <div className="px-3 py-1 text-sm bg-pink-500 bg-opacity-50 border border-pink-600 rounded-full">
          School
        </div>
      );
    case 'karen':
      return (
        <div className="px-3 py-1 text-sm bg-yellow-700 bg-opacity-50 border border-yellow-800 rounded-full">
          Karen
        </div>
      );
    case 'go':
      return (
        <div className="px-3 py-1 text-sm bg-blue-200 bg-opacity-50 border border-blue-500 rounded-full">
          Go
        </div>
      );
    case 'next.js':
      return (
        <div className="px-3 py-1 text-sm bg-gray-400 bg-opacity-50 border border-gray-600 rounded-full">
          Next.js
        </div>
      );
    case 'covid-19':
      return (
        <div className="px-3 py-1 text-sm bg-red-600 bg-opacity-50 border border-red-800 rounded-full">
          COVID-19
        </div>
      );
    case 'react':
      return (
        <div className="px-3 py-1 text-sm bg-yellow-600 bg-opacity-50 border border-yellow-800 rounded-full">
          React
        </div>
      );
    case 'bioinformatics':
      return (
        <div className="px-3 py-1 text-sm bg-pink-700 bg-opacity-50 border border-pink-900 rounded-full">
          Bioinformatics
        </div>
      );
    case 'bots':
      return (
        <div className="px-3 py-1 text-sm bg-green-700 bg-opacity-50 border border-green-900 rounded-full">
          Bots
        </div>
      );
    default:
      return (
        <div className="px-3 py-1 text-sm bg-gray-400 bg-opacity-50 border border-gray-600 rounded-full">
          Next.js
        </div>
      );
  }
};

export default function ({ tag }) {
  return <>{renderSwitch(tag)}</>;
}
