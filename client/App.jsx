import React, { useState, useEffect } from 'react';
import './components/styles.scss';
// import { render } from 'react-dom';

import Input from './components/Input.jsx';
import CardsDisplay from './components/CardsDisplay.jsx';

const App = () => {
  return (
    <div >
      <h1>
        Project Tracker
      </h1>
      {/* <img src=''> */}
      <Input />
      <CardsDisplay />
    </div>
  )
};

export default App;


