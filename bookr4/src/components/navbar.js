import React from "react";
import { Link } from 'react-router-dom';

const Navbar = (props) => (
  <nav>
    <h2 className="logo">
      <Link className="logo-link" to="/">
        {props.title}
      </Link>
    </h2>
    <ul className="nav-menu">
      <li>
        <Link className="nav-menu_link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="nav-menu_link" to="/books">
          Books
        </Link>
      </li>
      <li>
        <Link className="nav-menu_link" to="/reviews">
          Reviews
        </Link>
      </li>
      <li>
        <Link className="nav-menu_link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
