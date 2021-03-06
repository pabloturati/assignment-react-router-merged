import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <NavLink exact activeClassName="navitem--selected" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="navitem--selected" to="/cv">
          CV
        </NavLink>
        <NavLink activeClassName="navitem--selected" to="/skills">
          Projects
        </NavLink>
      </nav>
    );
  }
}

export default Nav;
