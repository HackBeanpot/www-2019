import React from 'react';
import Link from 'gatsby-link';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookBoxIcon from 'mdi-react/FacebookBoxIcon';
import SnapchatIcon from 'mdi-react/SnapchatIcon';
import LinkedinBoxIcon from 'mdi-react/LinkedinBoxIcon';

const mailchimpUrl =
  'https://hackbeanpot.us9.list-manage.com/subscribe?u=13bbeb925dd0787e5b3b9b8c3&id=ce1b65ecda';

const Footer = () => (
  <div className="dark-background footer">
    <div className="row">
      <div className="offset-sm-2 col-sm-2 center">{/* TODO: New logo */}</div>
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
