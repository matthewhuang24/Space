import React from 'react';

import Navbar from './Navbar.jsx';

const Dashboard = (props) => {
  return (
    <div className="h-screen">
      <Navbar storageKey={props.storageKey}/>
    </div>
  );
};

export default Dashboard;
