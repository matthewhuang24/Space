import React, {useState, useEffect} from 'react';

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
      .then(jsonData => {
        setSearchResults(jsonData)
      })
  }

  const arr = [];
  for (let i = 0; i < searchResults.length; i++) {
    arr.push(<Card info={searchResults[i]}/>)
  }

  return (
    <div>Inside SearchBar
      <input value={tech} onChange={e => setTech(e.target.value)} placeholder='Technology to search for'></input>
      <button onClick={handleOnClick}>Search</button>

      {arr}
    </div>
    
    
  )
}

export default SearchBar;

// import React from 'react';
// import { render } from 'react-dom';
// import App from './App';

// render(<App />, document.querySelector('#root'));