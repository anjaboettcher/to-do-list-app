import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  return (
    <nav className="App-header">
      <NavLink to="/todos">To Dos</NavLink>
      <NavLink to="/newtodos">New To Dos</NavLink>
    </nav>
  )
}

export default withRouter(MainNavbar)
