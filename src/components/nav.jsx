import React from 'react';
import Link from 'gatsby-link';
import Logo from 'images/icon@4x.png';

const Nav = () => (
  // TODO arrange links for mobile/smaller screens
  <nav className="container navbar navbar-expand navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      <img src={Logo} className="navbar-logo" />
    </Link>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/sponsors">
          Sponsors
        </Link>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://projects.hackbeanpot.com/"
          target="_blank"
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          href="https://hackbeanpot.wordpress.com/"
          target="_blank"
        >
          Blog
        </a>
      </li>
    </ul>
  </nav>
);

export default Nav;
