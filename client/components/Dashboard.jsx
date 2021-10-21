import React from 'react';

import Navbar from './Navbar';

const Dashboard = (props) => {
  return (
    <div className="h-screen">
      <Navbar storageKey={props.storageKey}/>
    </div>
  );
};

export default Dashboard;
