import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div id="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
    </div>

  );
}
