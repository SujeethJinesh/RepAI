import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import { GenRep, TechRep } from './pages';
import { Dictaphone } from './components';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/genRep" component={GenRep} />
        <Route path="/techRep" component={TechRep} />
        </Switch>
      </Router>
    );
  }
}

export default App;
