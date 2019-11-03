import React, { Component } from 'react';
import DynamicLink from './dynamic-link.jsx';
import NavLinks from 'data/nav-links.json';

import LogoIcon from 'images/svg/logo-icon.jsx';
import LogoIconWhite from 'images/svg/logo-icon-white.jsx';

class NavMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };

    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
      <nav
        className={`nav-mobile ${this.state.isNavOpen ? 'opened' : 'closed'}`}
      >
        <div className="nav-mobile__top">
          <DynamicLink to="/" className="nav__logo">
            {this.state.isNavOpen ? <LogoIconWhite /> : <LogoIcon />}
          </DynamicLink>
          <button onClick={this.menuToggle} className="nav-mobile__toggle-btn">
            <i
              className={
                this.state.isNavOpen
                  ? 'mdi mdi-24px mdi-close close-icon'
                  : 'mdi mdi-24px mdi-menu menu-icon'
              }
            />
          </button>
        </div>
        <ul
          className="nav-mobile__list"
          style={
            this.state.isNavOpen ? { display: 'block' } : { display: 'none' }
          }
        >
          {NavLinks.map((link, index) => {
            return (
              <li key={`nav-item-${index}`} className="nav-mobile__item">
                <DynamicLink
                  className="nav-mobile__link"
                  to={link.path}
                  onClick={this.menuToggle}
                >
                  {link.name}
                </DynamicLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavMobile;
