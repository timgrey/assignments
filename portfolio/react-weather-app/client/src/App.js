import React from 'react'

import Home from "./Home"
import Login from "./Login"

const authenticated = true

export default function App() {
  return (
    <div className="home">
        {authenticated ? <Home /> : <Login />}
    </div>
  )
}