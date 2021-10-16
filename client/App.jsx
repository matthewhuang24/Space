import React, { useState, useEffect } from 'react';
// import { render } from 'react-dom';

import Input from './components/Input.jsx';
import CardsDisplay from './components/CardsDisplay.jsx';

const App = () => {
  return (
    <div>Project Tracker
      <Input />
      <CardsDisplay />
    </div>
  )
};

export default App;


