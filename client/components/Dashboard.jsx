import React from 'react';
import { useLocation } from 'react-router';

const Dashboard = () => {
  const location = useLocation();
  const { header } = location.state;

  return (
    <div className="md:container md:mx-auto flex flex-col justify-center items-center h-screen">
      <div className="text-5xl">
        {header}
      </div>
    </div>
  )
};

export default Dashboard;