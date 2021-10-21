import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../styles/tailwind.css';

import Welcome from './Welcome.jsx';
import Dashboard from './Dashboard.jsx';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exac path ="/dashboard">
          <Dashboard storageKey='key' />
        </Route>
        <Route exac path ="/">
          <Welcome storageKey='key' />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
