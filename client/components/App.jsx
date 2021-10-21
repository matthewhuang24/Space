import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import '../styles/tailwind.css';

import Welcome from './Welcome';
import Dashboard from './Dashboard';

const App = () => {
  const key = uuidv4();
  
  return (
    <Router>
      <Switch>
        <Route exac path ="/dashboard">
          <Dashboard storageKey={key} />
        </Route>
        <Route exac path ="/">
          <Welcome storageKey={key} />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));