import React from 'react';
import LogoIcon from 'images/svg/logo-icon.jsx';
import NavLinks from 'data/nav-links.json';
import DynamicLink from './dynamic-link.jsx';

const Nav = () => (
  <nav className="nav">
    <DynamicLink to="/" className="nav__logo">
      <LogoIcon />
    </DynamicLink>
    <ul className="nav__list">
      {NavLinks.map((link, index) => {
        return (
          <li key={`nav-item-${index}`} className="nav__item">
            <DynamicLink className="nav__link" to={link.path}>
              {link.name}
            </DynamicLink>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Nav;
