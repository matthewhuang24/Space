import React, {useState, useEffect} from 'react';
import Card from './Card.jsx';

//GET REQUEST TO /projects

const SearchBar = () => {

  const [ tech, setTech ] = useState('');
  const [ searchResults, setSearchResults ] = useState([]);

// function 
  const handleOnClick = () => {
    const searchUrl = `http://localhost:5001/projects/${tech}`;
    
    console.log('tech: ', tech)

    fetch(searchUrl)
      .then(res => res.json())
      .then((jsonData) => {
        setSearchResults(jsonData);
        setTech('');
      })
  }

  const arr = [];
  for (let i = 0; i < searchResults.length; i++) {
    arr.push(<Card key={i} info={searchResults[i]}/>)
  }

  return (
    <div>
      <div id='searchbar'>
        <input id='searchInput' value={ tech } onChange={e => setTech(e.target.value)} placeholder='Technology to search for'></input>
        <button onClick={ handleOnClick }>Search</button>
      </div>
      <div id='results'>
        {arr}
      </div>
    </div>
    
    
  )
}

export default SearchBar;

// import React from 'react';
// import { render } from 'react-dom';
// import App from './App';

// render(<App />, document.querySelector('#root'));