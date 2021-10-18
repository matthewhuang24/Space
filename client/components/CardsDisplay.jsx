import React, { useState, useEffect } from 'react';

import SearchBar from './SearchBar.jsx';
import SearchDisplay from './SearchDisplay.jsx';

const CardsDisplay = () => {
  return (
  <div id='cardsDisplay'>
    <div id='cardsDisplayTitle'><b>Search for Projects</b></div>
    <SearchBar />
    {/* <SearchDisplay /> */}
  </div>
  )
}

export default CardsDisplay;