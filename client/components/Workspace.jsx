import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Dropdown, DropdownItem, DropdownLink } from '@material-tailwind/react';
import '@material-tailwind/react/tailwind.css';
import Multiselect from 'multiselect-react-dropdown';
import H4 from "@material-tailwind/react/Heading4";
import H3 from "@material-tailwind/react/Heading6";
import H6 from "@material-tailwind/react/Heading6";
import { saveAs } from "file-saver";
import Card from './Card.jsx';

const Workspace = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  
  const multiselectRef = useRef() 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const technologies = muiltiselect.current.getSelectedItems()
    console.log(technologies)
    console.log(titleInput)
    console.log(descriptionInput)
    localStorage.setItem("names", titleInput);
    localStorage.setItem("technologies", technologies);
    localStorage.setItem("description", descriptionInput);
  }

  const downloadWorkspace = () => {
    const retrievedData = JSON.parse(window.localStorage.getItem(props.storageKey));
    const workspaceName = 'my-workspace.json';

    const workspaceToSave = new Blob([JSON.stringify(retrievedData)], { type: 'application/json' });

    localStorage.key(0)
      ? saveAs(workspaceToSave, workspaceName)
      : alert("Empty Workspace");
  };
  let projectCards;
  if(localStorage.key(0)) {
    const localStorageKey = localStorage.key(0);
    const LSObject = localStorage.getItem(localStorageKey);
    const parsedObj = JSON.parse(LSObject);

    projectCards = parsedObj.projects.map(({name, technologies, description}) => (
      <Card  name={name} tech={technologies} description={description}/>
    ))
  };

  const uploadItem = () => localStorage.setItem(props.storageKey);

  return (
    <div className='w-full h-screen border-style: solid border-4 border-blue-500'>
      {/* buttons */}
      <div className='w-full h-fill border-style: solid border-2 border-green-500'>
        <div className='flex flex-row justify-start'>
          <button
            className='modal-open py-2 px-4 ml-5 mt-2 mb-2 bg-pink-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'
            onClick={() => setShowModal(true)}>
            Add Project
          </button>
          {showModal ? (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-6/12 my-6 mx-auto max-w-sm'>
                  {/*content*/}
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    {/*header*/}
                    <div className='flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                    <H4 color="black">New Project</H4>
                      <button
                        className='p-1 flex flex-row justify-center items-center mb-3 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none'
                        onClick={() => setShowModal(false)}>
                        x
                      </button>
                    </div>
                    {/*body*/}
                    <div className='flex flex-col justify-center items-start p-6 '>
                      <form onSubmit={handleSubmit} 
                      className='flex flex-col justify-center items-start'>
                      <H6 color="black">Title</H6>
                        <input
                          className='pr-4 pl-4 pt-1 pb-1 w-full border border-black rounded-lg'
                          type='text'
                          onChange={(e) => setTitle(e.target.value)} value={titleInput}
                        />

                        <Multiselect
                          id="id"
                          ref={multiselectRef}
                          closeOnSelect={false}
                          isObject={false}
                          onRemove={function noRefCheck() {}}
                          onSearch={function noRefCheck() {}}
                          onSelect={function noRefCheck() {}}
                          options={[
                            'React',
                            'React Router',
                            'React Hooks',
                            'Redux',
                            'Express',
                            'SQL',
                            'MongoDB',
                            'Bootstrap',
                            'Tailwind'
                          ]}
                          placeholder="Technologies"
                          style={{
                            searchbox: '{border: 1px solid black; font-size: 10px;   min-height: 50px; }'
                          }}
                        />


                        <H6 color="black">Description:</H6>
                        <textarea
                          type='message'
                          rows='4'
                          cols='35'
                          className='pr-4 pl-4 pt-3 pb-3 w-full border border-black rounded-lg'
                          onChange={(e) => setDescription(e.target.value)} value={descriptionInput} />
                      </form>
                    </div>

                    {/*footer*/}
                    <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                      <button
                        className='py-2 px-4 ml-5 mt-2 mb-2 bg-red-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'
                        type='button'
                        onClick={() => setShowModal(false)}>
                        Close
                      </button>
                      <button
                        className='py-2 px-4 ml-5 mt-2 mb-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'
                        type='submit'
                        value='submit'                 
                        onClick={() => setShowModal(false)}>
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
          ) : null}

          {/* Save/Download Button */}

          <button
            onClick={downloadWorkspace}
            className='py-2 px-4 ml-5 mt-2 mb-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'>
            Save/Download Project
          </button>
        </div>
      </div>

      {/* Render Project components here */}
      {projectCards}
    </div>
  );
};

export default Workspace;
