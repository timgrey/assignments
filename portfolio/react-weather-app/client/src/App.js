import React, { Component } from 'react'
// import axios from "axios"
import Home from "./Home"
import Login from "./Login"


export default class getCards extends Component {
  constructor() {
    super();
    this.state = {
      authenticated:false,
      homeLat:null,
      homeLon:null
    };

  }

  render() {
    const {authenticated} = this.state
    return(
      <div className="home">
        {authenticated ? 
          <Home {...this.state}/>
          :
          <Login />
        }
      </div>
    )
  }
}