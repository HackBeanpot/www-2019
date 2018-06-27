import React from 'react';
import Link from 'gatsby-link';

const Nav = ({ siteTitle }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/home/">
      {siteTitle}
    </Link>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/stories/">
          Stories
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/sponsors/">
          Sponsors
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects/">
          Projects
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
