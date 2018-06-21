import React from 'react';
import Link from 'gatsby-link';

const Nav = ({ siteTitle }) => (
  <div>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
        This is our nav bar
      </h1>
    </div>
  </div>
);

export default Nav;
