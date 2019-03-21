import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = (props) => (
 
<div className="nav">
<h2 className="logo">
      <NavLink className="logo-link" exact to="/">
        {props.title}
      </NavLink>
    </h2>
    <ul className="nav-menu">
      <li>
        <NavLink className="nav-menu_link" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu_link" to="/books">
          Books
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu_link" to="/reviews">
          Reviews
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-menu_link" to="/login">
          Login
        </NavLink>
      </li>
    </ul>
</div>

);

export default Navbar;
