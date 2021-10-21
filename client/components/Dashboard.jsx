import React from 'react';

import Navbar from './Navbar.jsx';
import Workspace from './Workspace.jsx';

const Dashboard = (props) => {
  return (
    <div className="h-screen">
      <Navbar storageKey={props.storageKey}/>
      <Workspace />
    </div>
  );
};

export default Dashboard;
