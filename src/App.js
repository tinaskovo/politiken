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

    // <div className="portfolio-container">
    //   <div className="landing-page">
    //     <h1>Hi, I am Developer</h1>
    //     <button>See my work</button>
    //   </div>
    //   <div className="work">
    //     <h1>This is my work</h1>
    //     <div>Interacoustics</div>
    //     <div>Medical</div>
    //     <div>Le Wagon</div>
    //     <button>About</button>
    //   </div>
    //   <div className="about">
    //     <h1>About</h1>
    //     <p>I am great developer</p>
    //     <button>Contact</button>
    //   </div>
    //   <div className="contact">
    //     <h2>Call me</h2>
    //     <p>+45 666</p>
    //     <button>To top</button>
    //   </div>
    // </div>
    // Navbar
    // Scrolltotop
    // Footer
  )
}

export default App;