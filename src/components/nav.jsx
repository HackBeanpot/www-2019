import React from 'react';
import Link from 'gatsby-link';
import LogoIcon from 'images/svg/logo-icon.jsx';

const Nav = () => (
  <nav className="nav">
    <Link to="/" className="nav__logo">
      <LogoIcon />
    </Link>
    <ul className="nav__list">
      <li className="nav__item">
        <a className="nav__link" href="/#faq">
          FAQ
        </a>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/stories">
          Stories
        </Link>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/sponsors">
          Sponsors
        </Link>
      </li>
      <li className="nav__item">
        <a
          className="nav__link"
          href="https://projects.hackbeanpot.com/"
          target="_blank"
        >
          Projects
        </a>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/team">
          Our Team
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
