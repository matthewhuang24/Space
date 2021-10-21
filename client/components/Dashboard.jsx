import React from 'react';

import Navbar from './Navbar.jsx';
import Workspace from './Workspace.jsx'

const Dashboard = (props) => {
  return (
    <div className="h-screen">
      <Navbar storageKey={props.storageKey}/>
      <Workspace storageKey={props.storageKey} />
    </div>
  );
};

export default Dashboard;
