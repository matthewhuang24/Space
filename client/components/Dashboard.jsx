import React from 'react';
import { useLocation } from 'react-router';
import Workspace from './Workspace'

const Dashboard = () => {
  //const location = useLocation();
  //const { header } = location.state;

  return (
      <div className='static mx-auto flex flex-col justify-center items-stretch h-screen'>
        <Workspace />
      </div>
  );
};

export default Dashboard;