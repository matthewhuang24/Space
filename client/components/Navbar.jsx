import React from 'react';

import NewWorkspace from '../components/buttons/NewWorkspace.jsx';
import UploadWorkspace from '../components/buttons/UploadWorkspace.jsx';
import logo from '../../images/space_navbar.png';


const Navbar = (props) => {
  const endpoint = localStorage.key(0) ? '/dashboard' : '/';

  return (
    <nav className="flex justify-between bg-gray-200 bg-opacity-50 h-20 ">
      <div className="flex items-center flex-shrink-0 text-black ml-3">
        
        <span className="font-semibold text-xl tracking-tight">
          <a  href={endpoint}><img className="w-2/3" src={logo}/></a>
        </span>
      </div>
      <div className="w-full block .right-0 lg:flex lg:items-center lg:w-auto">
        <div className="w-96 mr-4 flex justify-around">
          <UploadWorkspace storageKey={props.storageKey} />
          <NewWorkspace storageKey={props.storageKey} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
