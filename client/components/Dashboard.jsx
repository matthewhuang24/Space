import React from 'react';

import Navbar from './Navbar.jsx';
import Card from './Card.jsx';

const Dashboard = (props) => {
  let projectCards = [];
    if(localStorage.key(0)) {
      const localStorageKey = localStorage.key(0);
      const LSObject = localStorage.getItem(localStorageKey);
      const parsedObj = JSON.parse(LSObject);

      projectCards = parsedObj.projects.map(({name, technologies, description}) => (
        <Card  name={name} tech={technologies} description={description}/>
      ))
    }
  
  return (
    <div className="h-screen">
      <Navbar storageKey={props.storageKey}/>
      {projectCards}
    </div>
  );
};

export default Dashboard;
