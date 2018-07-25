import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Nav from 'components/nav';
import 'styles/main.scss';

// Shows the header and footer on every page
const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'HackBeanpot'}
      meta={[
        { name: 'description', content: 'A Boston area hackathon' },
        { name: 'keywords', content: 'Hack Beanpot' }
      ]}
    />
    <Nav siteTitle={'HackBeanpot'} />
    <div>{children()}</div>
  </div>

  // TODO: Add footer
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
