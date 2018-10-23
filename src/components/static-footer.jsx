import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import LogoWhite from 'images/logo-white.jsx';

const StaticFooter = () => (
  <Fragment>
    <div className="dark-background footer">
      <div className="row">
        <div className="offset-sm-5 col-sm-2 center-h-v">
          <LogoWhite />
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
  </Fragment>
);

export default StaticFooter;
