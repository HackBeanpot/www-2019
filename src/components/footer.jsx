import React from 'react';
import Link from 'gatsby-link';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import TwitterBoxIcon from 'mdi-react/TwitterBoxIcon';
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon';
import LogoWhite from 'images/logo-white.jsx';

const Footer = () => (
  <div className="dark-background footer">
    <div className="row">
      <div className="offset-sm-2 col-sm-3 center-h-v">
        <a href="http://eepurl.com/dFx_Cf" target="blank">
          <h3 className="footer-heading">Join Our Mailing List</h3>
        </a>
      </div>
      <div className="col-sm-2 center-h-v">
        <LogoWhite />
      </div>
      <div className="col-sm-3 center-h-v">
        <span>
          <a href="https://www.instagram.com/hackbeanpot" target="blank">
            <InstagramIcon className="icon-small" />
          </a>
          <a href="https://www.facebook.com/hackbeanpot" target="blank">
            <FacebookBoxIcon className="icon-small" />
          </a>
          <a href="https://twitter.com/hackbeanpot" target="blank">
            <TwitterBoxIcon className="icon-small" />
          </a>
          <a
            href="https://www.linkedin.com/company/hackbeanpot-inc/"
            target="blank"
          >
            <LinkedinBoxIcon className="icon-small" />
          </a>
        </span>
      </div>
    </div>
    <div className="center-text">
      <p>
        HackBeanpot, Inc. is a registered 501(c)(3) organization.&nbsp;
        <Link className="coc-link" to="/CodeOfConduct/">
          Code of Conduct
        </Link>
      </p>
    </div>
  </div>
);

export default Footer;
