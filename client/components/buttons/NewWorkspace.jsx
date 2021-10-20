import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const NewWorkspace = () => {
  const howToPassProps = {
    pathname: '/dashboard',
    state: {
      header: 'DASHBOARD'
    }
  };

  return (
    <Link to={howToPassProps}>
      <button
        className="py-2 px-4 bg-pink-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none"
      >
        New Workspace
      </button>
    </Link>
  );
}

export default NewWorkspace;