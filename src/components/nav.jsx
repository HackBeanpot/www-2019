import React from 'react';
import Link from 'gatsby-link';
import Logo from 'images/icon@4x.png';

const Nav = () => (
  <nav className="nav">
    <Link to="/">
      <img src={Logo} className="nav__logo" />
    </Link>
    <ul className="nav__list">
      <li className="nav__item">
        <a className="nav-link" href="#faq">
          FAQ
        </a>
      </li>
      <li className="nav__item">
        <Link className="nav-link" to="/stories">
          Stories
        </Link>
      </li>
      <li className="nav__item">
        <Link className="nav-link" to="/sponsors">
          Sponsors
        </Link>
      </li>
      <li className="nav__item">
        <a
          className="nav-link"
          href="https://projects.hackbeanpot.com/"
          target="_blank"
        >
          Projects
        </a>
      </li>
      <li className="nav__item">
        <Link className="nav-link" to="/team">
          Our Team
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
