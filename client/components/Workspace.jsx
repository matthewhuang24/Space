import React, { useState, useEffect, Fragment } from 'react';
import { Dropdown, DropdownItem, DropdownLink } from '@material-tailwind/react';
import "@material-tailwind/react/tailwind.css";
import { saveAs } from "file-saver";
import Card from './Card.jsx';

const Workspace = (props) => {
  const [showModal, setShowModal] = useState(false);

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
                <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                  {/*content*/}
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    {/*header*/}
                    <div className='flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                      <h1 className='flex text-2xl self-center font-semibold'>New Project</h1>
                      <button
                        className='p-1 flex flex-row justify-center items-center mb-3 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none'
                        onClick={() => setShowModal(false)}>
                        x
                      </button>
                    </div>
                    {/*body*/}
                    <div className='flex flex-col justify-center items-start p-6 '>
                      <form className='flex flex-col justify-center items-start'>
                        <label>Title:</label>
                        <input
                          className='pr-4 pl-4 pt-1 pb-1 w-full border border-indigo-600 rounded-lg'
                          type='text'
                        />
                        <Dropdown
                          color='blue'
                          placement='bottom-start'
                          buttonText='Technologies'
                          buttonType='filled'
                          size='sm'
                          rounded={false}
                          block={false}
                          ripple='light'>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                            <label> React</label>
                          </DropdownItem>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                          <label> Redux</label>
                          </DropdownItem>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                          <label> Express</label>                          
                          </DropdownItem>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                          <label> SQL</label>
                           </DropdownItem>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                          <label> MongoDB</label>
                          </DropdownItem>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                          <label> Bootstrap</label>
                          </DropdownItem>
                          <DropdownItem color='blue' ripple='light'>
                          <input type="checkbox"/>
                          <label> Tailwind</label>
                          </DropdownItem>
                        </Dropdown>
                        
                        
                        <label>Description:</label>
                        <textarea
                          type='message'
                          rows='4'
                          cols='35'
                          className='pr-4 pl-4 pt-3 pb-3 w-full border border-indigo-600 rounded-lg'
                        />
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
                        type='button'
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
