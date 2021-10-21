import React from 'react';

import NewWorkspace from '../components/buttons/NewWorkspace.jsx';
import UploadWorkspace from '../components/buttons/UploadWorkspace.jsx';

const Navbar = (props) => {
  return (
    <nav className="flex justify-between bg-gray-200 bg-opacity-50 h-20 ">
      <div className="flex items-center flex-shrink-0 text-black ml-8">
        <svg className="fill-current h-8 w-8 mr-1" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>  </svg>
        <span className="font-semibold text-xl tracking-tight"><a href="/dashboard">POGO</a></span>
      </div>
      <div className="w-full block .right-0 lg:flex lg:items-center lg:w-auto">
        <div className="w-96 mr-8 flex justify-around">
          <UploadWorkspace storageKey={props.storageKey} />
          <NewWorkspace storageKey={props.storageKey} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;