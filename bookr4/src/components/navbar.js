import React from "react";

const Navbar = () => (
  <nav>
    <h2 className="logo">
      <a className="logo-link" href="/">
        Bookr
      </a>
    </h2>
    <ul className="nav-menu">
      <li>
        <a className="nav-menu_link" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="nav-menu_link" href="/">
          Books
        </a>
      </li>
      <li>
        <a className="nav-menu_link" href="/">
          Reviews
        </a>
      </li>
      <li>
        <a className="nav-menu_link" href="/">
          Home
        </a>
      </li>
      <li>
        <a className="nav-menu_link" href="/">
          Contact Us
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
