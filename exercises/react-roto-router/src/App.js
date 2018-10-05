import React from 'react';

import logo from './logo.svg';
import Home from "./Home"
import About from "./About"
import Services from "./Services"

import { Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="body-wrapper">
      <header>
        <img src={logo}/> <h1>Phantastic Plumbers</h1>
        <h2><i>Services that will make a splash!</i></h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </Switch>
      <footer>
        ©2018
        </footer>
    </div>
  )
}

export default App;
