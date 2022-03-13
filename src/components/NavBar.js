import React from "react";
import {NavLink} from "react-router-dom";

export default function NavBar() {

  return (

    //Navigation Bar Links
    <div id="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </div>

  );
}
