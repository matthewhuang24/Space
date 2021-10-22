import React, { useState, useEffect, Fragment, useRef } from 'react';
import { Dropdown, DropdownItem, DropdownLink } from '@material-tailwind/react';
import '@material-tailwind/react/tailwind.css';
import Multiselect from 'multiselect-react-dropdown';
import H4 from '@material-tailwind/react/Heading4';
import H3 from '@material-tailwind/react/Heading6';
import H6 from '@material-tailwind/react/Heading6';
import { saveAs } from 'file-saver';
import Card from './Card.jsx';

const Workspace = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [titleInput, setTitle] = useState('');
  const [descriptionInput, setDescription] = useState('');
  const [myProjects, setProjects] = useState([]);

  const multiselectRef = useRef();

  let projectCards;

  if (localStorage.key(0)) {
    const localStorageKey = localStorage.key(0);
    const LSObject = localStorage.getItem(localStorageKey);
    const parsedObj = JSON.parse(LSObject);

    projectCards = parsedObj.projects.map(({ name, technologies, description }, index = 1) => (
      <Card name={name} tech={technologies} description={description} key={(index += 1)} />
    ));
  }

  const handleClick = (e) => {
    e.preventDefault();
    const technologies = multiselectRef.current.getSelectedItems();

    setProjects([
      ...myProjects,
      {
        name: titleInput,
        technologies: technologies,
        description: descriptionInput,
      },
    ]);
  };

  const project = {};

  useEffect(() => {
    project.projects = [...myProjects];
    window.localStorage.setItem(props.storageKey, JSON.stringify(project));
  });

  const downloadWorkspace = () => {
    const retrievedData = JSON.parse(window.localStorage.getItem(props.storageKey));
    const workspaceName = 'my-workspace.json';

    const workspaceToSave = new Blob([JSON.stringify(retrievedData)], { type: 'application/json' });

    localStorage.key(0) ? saveAs(workspaceToSave, workspaceName) : alert('Empty Workspace');
  };

  return (
    <div className='w-full h-screen'>
      <div className='w-full h-fill'>
        <div className='flex flex-row justify-start'>
          <button
            className='modal-open py-2 px-4 ml-5 mt-2 mb-2 bg-green-300 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'
            onClick={() => setShowModal(true)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 4v16m8-8H4'
              />
            </svg>
          </button>

          {showModal ? (
            <>
              <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative w-6/12 my-6 mx-auto max-w-sm'>
                  <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                    <div className='flex items-center justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                      <H4 color='black'>
                        New Project
                      </H4>
                      <button
                        className='p-1 flex flex-row justify-center items-center mb-3 ml-auto bg-transparent border-0 text-black float-right text-2xl leading-none font-semibold outline-none focus:outline-none'
                        onClick={() => setShowModal(false)}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                    <div className='flex flex-col justify-center items-start p-6 '>
                      <form>
                        <H6 color='black'>Title:</H6>
                        <input
                          className='pr-4 pl-4 pt-1 pb-1 w-full border-2 rounded-lg mb-2'
                          placeholder='Name your project'
                          type='text'
                          onChange={(e) => setTitle(e.target.value)}
                          value={titleInput}
                        />
                        <Multiselect
                          id='id'
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
                            'Tailwind',
                          ]}
                          placeholder='Technologies'
                          style={{
                            searchbox: '{ font-size: 9px; min-height: 50px; }',
                          }}
                        />
                        <H6 color='black' className='font-comfortaa'>
                          Description:
                        </H6>
                        <textarea
                          type='message'
                          rows='4'
                          cols='35'
                          className='pr-4 pl-4 pt-3 pb-3 w-full border-2 rounded-lg'
                          placeholder='Describe your project'
                          onChange={(e) => setDescription(e.target.value)}
                          value={descriptionInput}
                        />
                      </form>
                    </div>
                    <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                      <button
                        className='py-2 px-4 ml-5 mt-2 mb-2 bg-green-300 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'
                        onClick={handleClick}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M5 13l4 4L19 7'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
            </>
          ) : null}
          <button
            onClick={downloadWorkspace}
            className='py-2 px-4 ml-5 mt-2 mb-2 bg-gray-300 text-white font-semibold rounded-lg shadow-md transform transition motion-reduce:transform-none hover:scale-125 duration-500 focus:outline-none'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4'
              />
            </svg>
          </button>
        </div>
      </div>
      {projectCards}
    </div>
  );
};

export default Workspace;
