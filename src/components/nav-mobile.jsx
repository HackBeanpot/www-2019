import React, { Component } from 'react';
import Link from 'gatsby-link';
import Logo from 'images/icon@4x.png';
import LogoWhite from 'images/logo-white.jsx';
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
          <Link to="/">
            {this.state.isNavOpen ? (
              <img src={Logo} className="nav__logo" />
            ) : (
              <img src={Logo} className="nav__logo" />
            )}
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
            <a className="nav-mobile__link" href="#faq">
              FAQ
            </a>
          </li>
          <li className="nav-mobile__item">
            <Link className="nav-mobile__link" to="/stories">
              Stories
            </Link>
          </li>
          <li className="nav-mobile__item">
            <Link className="nav-mobile__link" to="/sponsors">
              Sponsors
            </Link>
          </li>
          <li className="nav-mobile__item">
            <a
              className="nav-mobile__link"
              href="https://projects.hackbeanpot.com/"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li className="nav-mobile__item">
            <Link className="nav-mobile__link" to="/team">
              Our Team
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMobile;
