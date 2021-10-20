import React from 'react';
import { useLocation } from 'react-router';

const UploadWorkspace = () => {
  return (
    <>
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
    </>
  );
}

export default UploadWorkspace;