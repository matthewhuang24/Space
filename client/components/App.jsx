import React from 'react';
import ReactDOM from 'react-dom';

import "../styles/tailwind.css";

const App = () => {
  return (
    <div className="text-5xl shadow-2xl bg-white rounded-lg h-18">I AM THE APP DADDY</div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));