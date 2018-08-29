import React from 'react';
import Link from 'gatsby-link';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import SnapchatIcon from 'mdi-react/SnapchatIcon';
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon';

const mailchimpUrl = 'todo mailchimp url';

const Footer = () => (
  <div className="dark-background footer">
    <div className="row">
      <div className="offset-sm-2 col-sm-2 center">
        <img
          className="logo-small"
          src="https://hackbeanpot.com/img/solid_logo.png"
        />
      </div>
      <div className="col-sm-3 center-h-v">
        <span>
          <h3>Stay Connected</h3>
          <MailchimpSubscribe url={mailchimpUrl} />
        </span>
      </div>
      <div className="col-sm-3 center-h-v">
        <span>
          <InstagramIcon className="icon-small" />
          <FacebookBoxIcon className="icon-small" />
          <SnapchatIcon className="icon-small" />
          <LinkedinBoxIcon className="icon-small" />
        </span>
      </div>
    </div>
    <div className="center-text">
      <p>
        HackBeanpot, Inc. is a registered 501(c)(3) organization.
        <Link className="coc-link" to="/CodeOfConduct/">
          Code of Conduct
        </Link>
      </p>
    </div>
  </div>
);

export default Footer;
