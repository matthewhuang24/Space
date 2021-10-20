import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../styles/tailwind.css';

import Welcome from './Welcome';
import Dashboard from './Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path="/" component={Welcome}/>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));