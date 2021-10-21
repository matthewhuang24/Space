import React from 'react';

import Navbar from './Navbar';

const Dashboard = (props) => {
  return (
    <>
      <Navbar storageKey={props.storageKey}/>
    </>
  );
};

export default Dashboard;