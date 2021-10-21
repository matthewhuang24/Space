import React from 'react';

const UploadWorkspace = (props) => {
  const readUpload = event => {
    const file = event.target.files[0];

    Promise.resolve(file.text())
      .then(res => JSON.parse(res))
      .then(data => {
        window.localStorage.setItem(props.storageKey, data);
        window.location = '/dashboard';
      })
      .catch(err => console.error(err));
  }

  return (
    <>
      <label
          htmlFor="upload"
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none"
        >
          Upload Workspace
      </label>
        <input
          id="upload"
          className="hidden"
          type="file"
          accept="application/json"
          onChange={(e) => readUpload(e)}
        />
    </>
  );
}

export default UploadWorkspace;