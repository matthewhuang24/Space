import React from 'react';
import { useLocation } from 'react-router';

const Home = () => {
  const location = useLocation();
  const { dashboard } = location.state;

  return (
    <div className="md:container md:mx-auto flex flex-col justify-center items-center h-screen">
      <div className="text-5xl">
        {dashboard}
      </div>
    </div>
  )
};

export default Home;