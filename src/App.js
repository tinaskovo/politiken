import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Politiken from './politiken'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/politiken" exact component={() => <Politiken />} />
      </Switch>
    </Router>
  )
}

export default App;