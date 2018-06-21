import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Nav from 'components/nav';
import 'styles/main.scss';

// Shows the header and footer on every page
const Layout = ({ children }) => (
  <div>
    <Helmet
      title={'Hack Beanpot'}
      meta={[
        { name: 'description', content: 'A Boston area hackathon' },
        { name: 'keywords', content: 'Hack Beanpot' }
      ]}
    />
    <Nav siteTitle={'Hack Beanpot'} />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;
