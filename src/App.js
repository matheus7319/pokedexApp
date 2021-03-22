import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home/Home';
import Favoritos from './pages/Favoritos/Favoritos';

import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'normalize.css';
import './App.scss';

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="main-wrapper">
          <Switch>
            <Route path="/favoritos">
              <Favoritos></Favoritos>
            </Route>
            <Route path="/404">
              <p>Not found</p>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
