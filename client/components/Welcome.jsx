import React from 'react';

import UploadWorkspace from './buttons/UploadWorkspace';
import NewWorkspace from './buttons/NewWorkspace';




const Welcome = () => {
  return (
    <div className="md:container md:mx-auto flex flex-col justify-center items-center h-screen">
      <div className="text-5xl p-4">
        "Logo Goes Here"
      </div>
      <div className="w-96 flex justify-around p-2">
        <UploadWorkspace />
        <NewWorkspace />
      </div>
    </div>
  )
};




export default Welcome;