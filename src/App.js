import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Politiken from './politiken'
import Portfolio from './portfolio'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Portfolio />} />
        <Route path="/politiken" exact component={() => <Politiken />} />
      </Switch>
    </Router>
  )
}

export default App;