import React from 'react';

import { v4 as uuidv4 } from 'uuid';

import UploadWorkspace from './buttons/UploadWorkspace';
import NewWorkspace from './buttons/NewWorkspace';

const Welcome = () => {
  const key = uuidv4();

  return (
    <div className="md:container md:mx-auto flex flex-col justify-center items-center h-screen">
      <div className="text-5xl p-4">
        "Logo Goes Here"
      </div>
      <div className="w-96 flex justify-around p-2">
        <UploadWorkspace storageKey={key} />
        <NewWorkspace storageKey={key} />
      </div>
    </div>
  )
};

export default Welcome;