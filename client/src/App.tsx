import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Resume from "./Resume";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Dusty Is</h1>

          <ul>
            <li><Link to="/a/software.engineer">A Software Engineer</Link></li>
            <li><Link to="/a/gamer">A Gamer</Link></li>
            <li><Link to="/on/facebook">On Facebook</Link></li>
            <li><Link to="/on/twitter">On Twitter</Link></li>
            <li><Link to="/on/linkedin">On LinkedIn</Link></li>
            <li><Link to="/on/xbox">On Xbox</Link></li>
          </ul>
        </Route>
        <Route exact path="/a/software.engineer">
          <Resume />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
