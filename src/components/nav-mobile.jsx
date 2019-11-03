import React, { Component } from 'react';
import Link from 'gatsby-link';
import LogoIcon from 'images/svg/logo-icon.jsx';
import LogoIconWhite from 'images/svg/logo-icon-white.jsx';
import MenuIcon from 'mdi-react/MenuIcon';
import CloseIcon from 'mdi-react/CloseIcon';

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
          <Link to="/" className="nav__logo">
            {this.state.isNavOpen ? <LogoIconWhite /> : <LogoIcon />}
          </Link>
          <button onClick={this.menuToggle} className="nav-mobile__toggle-btn">
            {this.state.isNavOpen ? (
              <CloseIcon className="close-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </button>
        </div>
        <ul
          className="nav-mobile__list"
          style={
            this.state.isNavOpen ? { display: 'block' } : { display: 'none' }
          }
        >
          <li className="nav-mobile__item">
            <a
              className="nav-mobile__link"
              href="/#faq"
              onClick={this.menuToggle}
            >
              FAQ
            </a>
          </li>
          <li className="nav-mobile__item">
            <Link
              className="nav-mobile__link"
              to="/stories"
              onClick={this.menuToggle}
            >
              Stories
            </Link>
          </li>
          <li className="nav-mobile__item">
            <Link
              className="nav-mobile__link"
              to="/sponsors"
              onClick={this.menuToggle}
            >
              Sponsors
            </Link>
          </li>
          <li className="nav-mobile__item">
            <a
              className="nav-mobile__link"
              href="https://projects.hackbeanpot.com/"
              target="_blank"
              onClick={this.menuToggle}
            >
              Projects
            </a>
          </li>
          <li className="nav-mobile__item">
            <Link
              className="nav-mobile__link"
              to="/team"
              onClick={this.menuToggle}
            >
              Our Team
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMobile;
