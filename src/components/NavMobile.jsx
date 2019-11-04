import React, { useState } from 'react';
import DynamicLink from './DynamicLink';
import NavLinks from 'data/nav-links.json';

import LogoIcon from 'images/svg/logo-icon.jsx';
import LogoIconWhite from 'images/svg/logo-icon-white.jsx';

const NavMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function menuToggle() {
    setIsNavOpen(!isNavOpen);
  }

  return (
    <nav className={`nav-mobile ${isNavOpen ? 'opened' : 'closed'}`}>
      <div className="nav-mobile__top">
        <DynamicLink to="/" className="nav__logo">
          {isNavOpen ? <LogoIconWhite /> : <LogoIcon />}
        </DynamicLink>
        <button onClick={menuToggle} className="nav-mobile__toggle-btn">
          <i
            className={
              isNavOpen
                ? 'mdi mdi-24px mdi-close close-icon'
                : 'mdi mdi-24px mdi-menu menu-icon'
            }
          />
        </button>
      </div>
      <ul
        className="nav-mobile__list"
        style={isNavOpen ? { display: 'block' } : { display: 'none' }}
      >
        {NavLinks.map((link, index) => {
          return (
            <li key={`nav-item-${index}`} className="nav-mobile__item">
              <DynamicLink
                className="nav-mobile__link"
                to={link.path}
                onClick={menuToggle}
              >
                {link.name}
              </DynamicLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
