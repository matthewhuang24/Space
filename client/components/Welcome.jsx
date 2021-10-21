import React from 'react';

import UploadWorkspace from './buttons/UploadWorkspace.jsx';
import NewWorkspace from './buttons/NewWorkspace.jsx';

import logo from '../../images/temp.png';

const Welcome = (props) => {
      localStorage.clear()


  if (localStorage.key(0)) {
    window.location.replace('/dashboard');
  }

  

  return (
    <div className="md:container md:mx-auto flex flex-col justify-center items-center h-screen">
      <img src={logo} />
      <div className="w-96 flex justify-around p-2">
        <UploadWorkspace storageKey={props.storageKey} />
        <NewWorkspace storageKey={props.storageKey} />
      </div>
    </div>
  )
};

export default Welcome;
