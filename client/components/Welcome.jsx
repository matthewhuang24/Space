import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const passingProps = {
    pathname: '/dashboard',
    state: {
      dashboard: 'DASHBOARD'
    }
  };

  return (
    <div className="md:container md:mx-auto flex flex-col justify-center items-center h-screen">
      <div className="text-5xl p-4">
        "Logo Goes Here"
      </div>
      <div className="w-96 flex justify-around p-2">
          <input
            id="upload"
            className="hidden"
            type="file"
            accept=".json"
          />
          <label
            htmlFor="upload"
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none"
          >
            Upload Workspace
          </label>
        <Link to={passingProps}>
          <button
            className="py-2 px-4 bg-pink-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none"
          >
            New Workspace
          </button>
        </Link>
      </div>
    </div>
  )
};

export default Welcome;